import React from 'react';

interface Movie {
  title: string;
  poster: string;
  description: string;
  director: string;
  summary: string;
  genre: string;
}

const Movie: React.FC<Movie> = ({ title, poster, description, director, summary, genre }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Director: {director}</p>
      <p>Summary: {summary}</p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default Movie;