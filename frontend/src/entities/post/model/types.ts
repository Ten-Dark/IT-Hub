import { Tag } from '@/entities/tags/model/types.ts';

export interface Post {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  tags: Tag[];
  created_at: string;
}

export interface PostState {
  posts: Post[];
  currentPost: Post | null;
}
