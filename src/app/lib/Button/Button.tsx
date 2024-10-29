import type { TButtonProps } from './types';
import styles from './styles.module.css';

export const Button = (props: TButtonProps) => {
  return <button className={styles.button} {...props} />;
};
