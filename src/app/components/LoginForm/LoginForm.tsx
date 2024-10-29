'use client';

import { useRouter } from 'next/navigation';

import { Input } from '@/app/lib/Input/Input';
import Button from '@/app/lib/Button';
import Checkbox from '@/app/lib/Checkbox';

import { login } from '@/app/actions/auth/login';

import styles from './styles.module.css';

export const LoginForm = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sign in</h3>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input required type="email" name="email" placeholder="Email" />
        <Input required type="password" name="password" placeholder="Password" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox label="Remember me" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
