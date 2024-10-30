import MovieForm from '@/widgets/MovieForm';
import Header from '@/shared/Header';
import { Title } from './ui/Title';

export default function EditMoviePage() {
  return (
    <>
      <Header>
        <Title title="Edit" />
      </Header>
      <MovieForm />
    </>
  );
}
