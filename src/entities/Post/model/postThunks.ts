import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostService } from '@/entities/Post/api/PostService.ts';
import { Post } from '@/entities/Post/model/types.ts';

export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await PostService.getAll();
      return res.documents.map((doc) => ({
        title: doc.title,
        description: doc.description,
        image: doc.image,
        category: doc.category,
        tags: doc.tags,
      }));
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return rejectWithValue(message);
    }
  },
);

export const createPost = createAsyncThunk<
  Post,
  { payload: Partial<Post>; file?: File },
  { rejectValue: string }
>('posts/create', async ({ payload, file }, { rejectWithValue }) => {
  try {
    const doc = await PostService.create(payload, file);
    const post: Post = {
      title: doc.title,
      description: doc.description,
      image: doc.image,
      category: doc.category,
      tags: doc.tags,
    };
    return post;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return rejectWithValue(message);
  }
});

export const updatePost = createAsyncThunk<
  Post,
  { id: string; data: Partial<Post> },
  { rejectValue: string }
>('posts/update', async ({ id, data }, { rejectWithValue }) => {
  try {
    const updated = await PostService.update(id, data);
    return {
      title: updated.title,
      description: updated.description,
      image: updated.image,
      category: updated.category,
      tags: updated.tags,
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return rejectWithValue(message);
  }
});

export const deleteById = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('posts/delete', async (id, { rejectWithValue }) => {
  try {
    await PostService.delete(id);
    return `Deleted: + ${id}`;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return rejectWithValue(message);
  }
});
