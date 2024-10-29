import { useMovies } from '@/widgets/MoviesGrid/api/useMovies';
import MovieCard from '@/widgets/MovieCard';
import styles from './styles.module.css';

export const MoviesGrid = () => {
  const { data, isLoading } = useMovies();

  return (
    <div className={styles.grid}>
      {isLoading && <div>Loading...</div>}

      {!isLoading && data.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  )
};