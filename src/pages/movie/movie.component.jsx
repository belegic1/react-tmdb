import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./movie.styles.scss"

const Movie = () => {

    const params = useParams()
    const key = '7ebdafc7e41c27a3349891497023a098';
    const youtube_key = 'AIzaSyA-ujV7cAZVW5DsyHQi1c2GWkoxNk8vkI0';
  const [movie, setMovie] = useState(null)
  const [video, setVideo] = useState(true)
    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&language=en-US`
        )
            .then(res => res.json())
            .then(res => setMovie(res))
        .catch(err => console.log(err))
    },[params.id])
  console.log(movie)
  // useEffect(() => {
  //   if (movie) {
  //     fetch(
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${movie.original_title}&key=${youtube_key}`
  //     )
  //       .then((res) => res.json())
  //       .then((res) => setVideo(res.items[0]));
  //   }
  // }, [movie])
  
  return (
    <div className="movie__container">
      <div className="video__container">
        {video && (
          <iframe
            className="iframe"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/DEPwA3mv_R8`}
            // src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>
      {movie && (
        <>
          <h1 className="movie__title">{movie.original_title}</h1>
          <p className="movie__description">{movie.overview}</p>
          <p className="movie__rating">Rating: {movie.vote_average}</p>
        </>
      )}
    </div>
  );
}

export default Movie