// PostMethods.ts
import { supabase } from '@/shared/config/supabase';
import { Post } from '@/entities/post/model/types.ts';

const BUCKET = 'post-images';

const uploadImg = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(fileName, file);

  if (error || !data) {
    throw new Error('Ошибка загрузки изображения: ' + error?.message);
  }
  const { data: publicUrlData } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(data.path);

  if (!publicUrlData.publicUrl) {
    throw new Error('Не удалось получить URL изображения');
  }
  return publicUrlData.publicUrl;
};

export const PostMethods = {
  async create(
    payload: Omit<Post, 'id' | 'created_at'>,
    file?: File,
  ): Promise<Post> {
    const imageUrl = file ? await uploadImg(file) : payload.image;

    const { data, error } = await supabase
      .from('posts')
      .insert({ ...payload, image: imageUrl })
      .select()
      .single();

    if (error) {
      console.error('Create error:', error);
      throw error;
    }
    if (!data) {
      throw new Error('No data returned from create operation');
    }
    return data as Post; // Явное приведение типа
  },

  async update(
    id: string,
    payload: Partial<Omit<Post, 'id' | 'created_at'>>,
    file: File,
  ): Promise<Post> {
    let imageUrl = payload.image;

    if (file) {
      imageUrl = await uploadImg(file);
    }
    const updatedPayload = {
      ...payload,
      ...(file ? { image: imageUrl } : {}),
    } as Post;
    if (imageUrl !== undefined) {
      updatedPayload.image = imageUrl;
    }
    const { data, error } = await supabase
      .from('posts')
      .update(updatedPayload)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Update error:', error);
      throw error;
    }

    if (!data) {
      throw new Error('No data returned from update operation');
    }

    return data as Post;
  },

  async delete(id: string): Promise<{ success: true; id: string }> {
    const { error } = await supabase.from('posts').delete().eq('id', id);

    if (error) {
      console.error('Delete error:', error);
      throw error;
    }

    return { success: true, id };
  },

  async getById(id: string): Promise<Post | null> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('GetById error:', error);
      throw error;
    }

    return data as Post;
  },

  async getAll(): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('GetAll error:', error);
      throw error;
    }
    return data as Post[];
  },

  async likePost(
    id: string,
    currentLikeIds: string[],
  ): Promise<{ likedIds: string[] }> {
    console.log('[STUB] LIKE for:', id);
    const updated = [...currentLikeIds, id];
    return { likedIds: updated };
  },
  async unlikePost(
    id: string,
    currentLikeIds: string[],
  ): Promise<{ likedIds: string[] }> {
    console.log('[STUB] UNLIKE for:', id);
    const updated = currentLikeIds.filter((likeId) => likeId !== id);
    return { likedIds: updated };
  },

  async getPaginated(limit: number, offset: number): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('GetPaginated error:', error);
      throw error;
    }

    return (data as Post[]) ?? [];
  },

  async getByCategory(category: string): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('GetByCategory error:', error);
      throw error;
    }

    return (data as Post[]) ?? [];
  },

  async search(term: string): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .or(`title.ilike.%${term}%,description.ilike.%${term}%`)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Search error:', error);
      throw error;
    }

    return (data as Post[]) ?? [];
  },
};
