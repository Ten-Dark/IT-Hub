import { Models } from 'appwrite';
import { Tag } from '@/entities/Tags/model/types.ts';

export interface Post {
  title: string;
  description: string;
  image?: string;
  category: string;
  tags: Tag[];
}

export type AppwriteDocument = Models.Document;

export type PostDocument = AppwriteDocument & Post;

export interface PostState {
  posts: Post[];
  currentPost: Post | null;
}
