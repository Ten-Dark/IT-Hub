import { $api } from '@/shared/api/axios.ts';
import { AuthFormValues } from '@/features/Auth/Auth.types.ts';

export const registerUser = async (data: AuthFormValues) => {
  const response = await $api.post('/auth/register', data);
  return response.data;
};
