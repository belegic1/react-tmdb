import './home.styles.scss';
import { useState } from 'react';
import Card from '../../components/card.component';
import { useMovies } from '../../hooks/useMovies';

function Home() {
  const movies = useMovies();

  return (
    <div className="app">
      {movies.data &&
        movies.data.results.map((movie) => (
          <Card
            key={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            id={movie.id}
          />
        ))}
    </div>
  );
}

export default Home;
