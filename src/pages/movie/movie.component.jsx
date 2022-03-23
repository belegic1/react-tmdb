import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks/useMovie';
import { useVideo } from '../../hooks/useVideo';
import './movie.styles.scss';

const Movie = () => {
  const params = useParams();

  const movie = useMovie(params.id);
  const video = useVideo(params.id);

  return (
    <div className="movie__container">
      <div className="video__container">
        {video.data && (
          <iframe
            className="iframe"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.data.results[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      {movie.data && (
        <>
          <h1 className="movie__title">{movie.data.original_title}</h1>
          <p className="movie__description">{movie.data.overview}</p>
          <p className="movie__rating">Rating: {movie.data.vote_average}</p>
        </>
      )}
    </div>
  );
};

export default Movie;
