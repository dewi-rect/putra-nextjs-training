import React from 'react';
import { useRouter } from 'next/router';
import { getMovies } from '.././utils/api';
import Movie from '../components/Movie';

const Index: React.FC = () => {
  const router = useRouter();
  const [movies, setMovies] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <Movie key={movie.title} {...movie} />
      ))}
    </div>
  );
};

export default Index;