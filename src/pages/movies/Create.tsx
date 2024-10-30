import MovieForm from '@/widgets/MovieForm';
import Header from '@/shared/Header';
import { Title } from './ui/Title';

export default function CreateMoviePage() {
  return (
    <>
      <Header>
        <Title title="Create a new movie" />
      </Header>
      <MovieForm />
    </>
  );
}
