'use client';

import { useRouter, useParams } from 'next/navigation';

import { Input } from '@/lib/Input/Input';
import Button from '@/lib/Button';
import { onSubmit } from '@/widgets/LoginForm/api/submit';
import { FileUploader } from '@/shared/FileUploader/ui/FileUploader';
import styles from './styles.module.css';

export const MovieForm = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params as Record<'id', string>;

  const onCancel = () => router.back();

  const isEdit = Boolean(id);
  const action = isEdit ? 'Update' : 'Submit';

  return (
    <div className={styles.container}>
      <FileUploader style={{ height: 504, width: 473 }} />

      <form className={styles.form} onSubmit={onSubmit(router)}>
        <Input required type="text" name="title" placeholder="Title" />
        <div className={styles.year}>
          <Input required type="text" name="year" placeholder="Publishing year" />
        </div>
        
        <div className={styles.actions}>
          <Button variant="secondary" onClick={onCancel} style={{ width: '100%' }}>Cancel</Button>
          <Button type="submit" style={{ width: '100%' }}>{action}</Button>
        </div>
      </form>
    </div>
  );
};
