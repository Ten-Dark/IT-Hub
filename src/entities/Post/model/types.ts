import { Tag } from '@/entities/Tags/model/types.ts';

export interface Post {
  title: string;
  description: string;
  image?: string;
  category: string;
  tags: Tag[];
  // created_at: string;
}

export interface PostState {
  posts: Post[];
  currentPost: Post | null;
}
