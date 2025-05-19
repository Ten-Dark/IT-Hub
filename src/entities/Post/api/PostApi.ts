import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import { Post } from '@/entities/Post/model/types.ts';
import { PostService } from '@/entities/Post/api/PostService.ts';

export const postApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api',
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      async queryFn() {
        try {
          const result = await PostService.getAll();
          const posts: Post[] = result.documents.map((doc) => ({
            title: doc.title,
            description: doc.description,
            image: doc.image,
            category: doc.category,
            tags: doc.tags,
          }));
          return { data: posts };
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          // Формируем корректный FetchBaseQueryError
          const fetchError: FetchBaseQueryError = {
            status: 'CUSTOM_ERROR',
            error: message,
          };
          return { error: fetchError };
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map((_, idx) => ({ type: 'Post' as const, id: idx })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    // POST /api/posts → create
    createPost: build.mutation<Post, Partial<Post>>({
      async queryFn (body) {
        try {
          const result = await PostService.create(body)
          return { data: result }
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          const fetchError: FetchBaseQueryError = {
            status: 'CUSTOM_ERROR',
            error: message,
          };
          return { error: fetchError };
        }
      },
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    // PUT /api/posts/:id → update
    updatePost: build.mutation<Post, { id: string; data: Partial<Post> }>({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
    }),
    deletePost: build.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
