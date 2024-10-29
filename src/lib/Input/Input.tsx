import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

export const Input = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <div className={styles['form-field']}>
      <input {...props} />
    </div>
  );
};
