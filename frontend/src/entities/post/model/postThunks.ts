import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostService } from '@/entities/post/api/PostService.ts';
import { Post } from '@/entities/post/model/types.ts';

export const fetchPosts = createAsyncThunk<
  Post[],
  void,
  { rejectValue: string }
>('posts/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    return await PostService.getAll();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return rejectWithValue(message);
  }
});

export const createPost = createAsyncThunk<
  Post,
  { payload: Omit<Post, 'id' | 'created_at'>; file?: File },
  { rejectValue: string }
>('posts/create', async ({ payload, file }, { rejectWithValue }) => {
  try {
    return await PostService.create(payload, file);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return rejectWithValue(message);
  }
});

export const updatePost = createAsyncThunk<
  Post,
  { id: string; payload: Partial<Omit<Post, 'id' | 'created_at'>>; file: File },
  { rejectValue: string }
>('posts/update', async ({ id, payload, file }, { rejectWithValue }) => {
  try {
    return await PostService.update(id, payload, file);
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

export const fetchPostsById = createAsyncThunk<
  Post | null,
  string,
  { rejectValue: string }
>('posts/fetchById', async (id, { rejectWithValue }) => {
  try {
    return await PostService.getById(id);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return rejectWithValue(message);
  }
});

export const fetchPostsByCategory = createAsyncThunk<
  Post[] | null,
  string,
  { rejectValue: string }
>('posts/fetchPostsByCategory', async (category, { rejectWithValue }) => {
  try {
    return await PostService.getByCategory(category);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return rejectWithValue(message);
  }
});

export const searchPosts = createAsyncThunk<
  Post[] | null,
  string,
  { rejectValue: string }
>('posts/search', async (queries, { rejectWithValue }) => {
  try {
    return await PostService.search(queries);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return rejectWithValue(message);
  }
});
