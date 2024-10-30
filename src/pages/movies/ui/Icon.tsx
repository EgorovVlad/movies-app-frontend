import NextLink from 'next/link';
import IconAddCircle from '@/lib/icons/IconAddCircle';
import styles from './styles.module.css';

export const Icon = () => {
  return (
    <NextLink href="movies/new" title="Add a movie" className={styles.link}>
      <IconAddCircle className={styles.icon} />
    </NextLink>
  );
};