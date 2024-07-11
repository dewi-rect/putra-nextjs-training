import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/movies.module.css'; // Import file CSS untuk styling komponen
import Navbar from '@/components/navbar';
import ReadMore from '@/components/readmore';

interface Movie {
  id: number;
  title: string;
  director: string;
  summary: string;
  image: string;
  genres: { name: string }[];
  created_at: string;
}

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://technical.test.talenavi.com/api/movie');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setMovies(data.data.data); // Sesuaikan dengan struktur data API
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleCardClick = (id: number) => {
    router.push(`/movies/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.moviesPage}>
        <h1 className={styles.title}>Movies List</h1>
        <div className={styles.moviesContainer}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movieCard} onClick={() => handleCardClick(movie.id)}>
              <img src={movie.image} alt={movie.title} className={styles.movieImage} />
              <div className={styles.featuredLabel}>Featured</div>
              <button className={styles.playButton}>
                <img src="/play-button.svg" alt="Play" />
              </button>
              <div className={styles.movieDetails}>
                <h2 className={styles.movieTitle}>{movie.title}</h2>

                {/* <p><strong>Director:</strong> {movie.director}</p> */}
                <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                <p><strong>Release:</strong> {new Date(movie.created_at).getFullYear()}</p>
                {/* <ReadMore text={movie.summary} maxLength={100} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
