import NextLink from 'next/link';
import MoviesGrid from '@/widgets/MoviesGrid';
import Button from "@/lib/Button";
import { EmptyMovieList } from '@/shared/placeholders/EmptyMovieList';
import Header from '@/shared/Header';
import { Title } from './ui/Title';

const movies: any = ['1'];

// https://picsum.photos/200/200?random=1

export default function MoviesPage() {
  const isEmpty = !movies || movies.length === 0;

  return (
    <>
      {isEmpty && (
        <>
          <Header />

          <EmptyMovieList>
            <NextLink href="movies/new" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <Button style={{ width: '100%' }}>Add a new movie</Button>
            </NextLink>
          </EmptyMovieList>
        </>
      )}

      {!isEmpty && (
        <>
          <Header>
            <Title />
          </Header>

          <MoviesGrid />
        </>
      )}
    </>
  );
}