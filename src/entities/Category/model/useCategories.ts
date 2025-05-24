import { getCategories } from '@/entities/Category/api/categoryService.ts';

export const useCategories = () => {
  return useQuery(['categories'], getCategories);
};
