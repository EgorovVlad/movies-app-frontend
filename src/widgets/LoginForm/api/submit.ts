import { login } from '@/app/actions/auth/login';  
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const onSubmit = (router: AppRouterInstance) => async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);
  const data = JSON.parse(JSON.stringify(Object.fromEntries(formData)));
  
  try {
    const success = await login(data.email, data.password);

    if (success) {
      router.push('/movies');
    }
  } catch (error) {
    console.log(error);
  }
};