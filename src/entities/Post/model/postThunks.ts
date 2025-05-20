import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '@/entities/Post/model/types.ts';
import { PostService } from '@/entities/Post/api/PostService.ts';

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
  Partial<Post>,
  { rejectValue: string }
>('posts/create', async (payload, { rejectWithValue }) => {
  try {
    const doc = await PostService.create(payload);
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
