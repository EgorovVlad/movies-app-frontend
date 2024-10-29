'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { TMovieCardProps } from './types';
import styles from './styles.module.css';

export const MovieCard = ({ movie }: TMovieCardProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <div className={styles.item} onClick={onClick}>
      <Image
        priority
        src={movie.poster} alt={movie.title}
        quality={100}
        width={278}
        height={400}
        className={styles.poster}
      />
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.year}>{movie.year}</div>
    </div>
  );
};