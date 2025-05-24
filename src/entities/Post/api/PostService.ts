import { PostMethods } from '@/entities/Post/api/PostMethods.ts';
import { Post } from '@/entities/Post/model/types.ts';

export const PostService = {
  create: async (payload: Omit<Post, 'id' | 'created_at'>, file?: File): Promise<Post> => {
    return await PostMethods.create(payload, file)
  },
  update: async (id: string, payload: Partial<Omit<Post, 'id' | 'created_at'>>, file: File) => {
    return await PostMethods.update(id, payload, file)
  },
  delete: async (id: string) => await PostMethods.delete(id),
  getAll: async () => {
    return await PostMethods.getAll()
  },
  getById: (id: string) => PostMethods.getById(id),
  getByCategory: (category: string) => PostMethods.getByCategory(category),
  search: (query: string) => PostMethods.search(query),
};