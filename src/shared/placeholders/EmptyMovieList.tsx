import type { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const EmptyMovieList = (props: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <h5>Your movie list is empty</h5>
      {props.children}
    </div>
  )
};