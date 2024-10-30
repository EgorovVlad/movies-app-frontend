'use client';

import NextLink from 'next/link';
import MoviesGrid from '@/widgets/MoviesGrid';
import Button from "@/lib/Button";
import { EmptyMovieList } from '@/shared/placeholders/EmptyMovieList';
import Header from '@/shared/Header';
import { useUser } from '@/shared/hooks/useUser';
import { Title } from './ui/Title';
import { Icon } from './ui/Icon';
import styles from './ui/styles.module.css';

const movies: any = ['1'];

export default function MoviesPage() {
  const isEmpty = !movies || movies.length === 0;

  const { user } = useUser();

  console.log(user);

  return (
    <>
      {isEmpty && (
        <>
          <Header />

          <EmptyMovieList>
            <NextLink href="movies/new" className={styles.link} style={{ width: '100%' }}>
              <Button style={{ width: '100%' }}>Add a new movie</Button>
            </NextLink>
          </EmptyMovieList>
        </>
      )}

      {!isEmpty && (
        <>
          <Header>
            <Title title="My movies">
              <Icon />
            </Title>
          </Header>

          <MoviesGrid />
        </>
      )}
    </>
  );
}