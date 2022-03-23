import "./home.styles.scss"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

function Home() {

  const [movies, setMovies] = useState(null)
  const [page, setPage] = useState(1)

  const key = '7ebdafc7e41c27a3349891497023a098'
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setMovies(res.results))
    .catch(err => console.log(err))
  },[page])
  return (
    <div className="app">
      {movies?.map(movie => (
        <div className='card' key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
          <h3 className="movie__title">{movie.original_title}</h3>
          <p className="movie__rating">rating: {movie.vote_average}</p>
          <Link to={`/${movie.id}`}>see more</Link>
        </div>
      ))}
      <div className="navigation">
        {page > 1 && <button className='navigation__button' onClick={() => setPage(page - 1)}>Prev Page</button>}
        <button className='navigation__button' onClick={() => setPage(page + 1)}>Next Page</button>
     </div>
   </div>
  );
}

export default Home;
