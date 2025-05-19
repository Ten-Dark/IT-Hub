import { AppwriteDocument, PostDocument } from '@/entities/Post/model/types.ts';
import { collections } from '@/entities/Post/api/PostClient.ts';

export const PostService = {
  create: (payload: Omit<PostDocument, keyof AppwriteDocument>) =>
    collections.posts.create(payload),
  update: (id: string, payload: Partial<PostDocument>) =>
    collections.posts.update(id, payload),
  delete: (id: string) => collections.posts.delete(id),
  getById: (id: string) => collections.posts.getById(id),
  getAll: (queries?: string[]) => collections.posts.getAll(queries),
  getByCategory: (category: string) =>
    collections.posts.getByCategory(category),
  search: (query: string) => collections.posts.search(query),
};
