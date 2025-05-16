export interface Post {
  id: number;
  title: string;
  description: string;
  image?: string;
  category: string;
  tags: string[];
  // created_at: string;
}

export interface PostState {
  posts: Post[];
  currentPost: Post | null;
}
