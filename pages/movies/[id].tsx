import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import styles from '../../styles/moviesdetail.module.css';

interface Movie {
    id: number;
    title: string;
    director: string;
    summary: string;
    image: string;
    created_at: string;
    genres: { name: string }[];
  }
  
  const MovieDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (id) {
        const fetchMovie = async () => {
          try {
            const response = await fetch(`https://technical.test.talenavi.com/api/movie/${id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
            const data = await response.json();
            setMovie(data.data);
          } catch (error) {
            console.error('Error fetching movie:', error);
          } finally {
            setLoading(false);
          }
        };
  
        fetchMovie();
      }
    }, [id]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!movie) {
      return <div>Movie not found</div>;
    }
  
    return (
      <div>
        <Navbar />
        <div className={styles.detailPage}>
          <img src={movie.image} alt={movie.title} className={styles.backgroundImage} />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <div>
              <img src={movie.image} alt={movie.title} className={styles.movieImage} />
            </div>
            <div className={styles.movieInfo}>
              <div className={styles.movieHeader}>
                <h2 className={styles.movieTitle}>{movie.title}</h2>
                <div className={styles.movieInfo}>
                  <p><strong>Director:</strong> {movie.director}</p>
                  <p><strong>Release:</strong> {new Date(movie.created_at).getFullYear()}</p>
                  <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                </div>
                <div className={styles.movieSummary}>
                  <h3>Summary</h3>
                  <p>{movie.summary}</p>
                </div>
                <a href="#" className={styles.playButton}>Play</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieDetailsPage;
