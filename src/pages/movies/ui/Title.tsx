import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import styles from './styles.module.css';

type TTitleProps = PropsWithChildren & {
  title: string | ReactElement | ReactNode;
}

export const Title = (props: TTitleProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{props.title}</span>
      {props.children}
    </div>
  );
};