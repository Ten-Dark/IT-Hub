import { Post } from '@/entities/Post/model/types.ts';
import { db } from '@/shared/config/appwrite';

export const postService = {
  async createPost(data: Omit<Post, 'id'>): Promise<Post> {
    const response = await db.createDocument(
      import.meta.env.VITE_APP_DB_ID!,
      import.meta.env.VITE_APP_COLLECTION_ID!,
      data
    )
    return response.document as Post;
  },
  async getPosts(): Promise<Post[]> {
    const list = await db.listDocuments(
      import.meta.env.VITE_APP_DB_ID!,
      import.meta.env.VITE_APP_COLLECTION_ID!,
    )
    return list.documents as Post;
  }
}