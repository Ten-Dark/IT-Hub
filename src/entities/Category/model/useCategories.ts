import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/entities/Category/api/categoryService.ts';

export const useCategories = () => {
  return useQuery(['categories'], getCategories);
};
