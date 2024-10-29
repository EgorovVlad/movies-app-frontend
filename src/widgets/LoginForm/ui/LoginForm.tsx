'use client';

import { useRouter } from 'next/navigation';

import { Input } from '@/lib/Input/Input';
import Button from '@/lib/Button';
import Checkbox from '@/lib/Checkbox';
import { onSubmit } from '@/widgets/LoginForm/api/submit';
import styles from './styles.module.css';

export const LoginForm = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sign in</h3>
      <form className={styles.form} onSubmit={onSubmit(router)}>
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
