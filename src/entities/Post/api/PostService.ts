import { AppwriteDocument, PostDocument } from '@/entities/Post/model/types.ts';
import { PostMethods } from '@/entities/Post/api/PostMethods.ts';

export const PostService = {
  create: (payload: Omit<PostDocument, keyof AppwriteDocument>, file?: File) =>
    PostMethods.create(payload, file),
  update: (id: string, payload: Partial<PostDocument>) =>
    PostMethods.update(id, payload),
  delete: (id: string) => PostMethods.delete(id),
  getById: (id: string) => PostMethods.getById(id),
  getAll: (queries?: string[]) => PostMethods.getAll(queries),
  getByCategory: (category: string) => PostMethods.getByCategory(category),
  search: (query: string) => PostMethods.search(query),
};
