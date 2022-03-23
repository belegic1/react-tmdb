import React from 'react'
import "./card.styles.scss"
import {Link} from "react-router-dom"

const Card = ({title, poster, rating, id}) => {
  return (
    <div className="card" >
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={title}
      />
      <h3 className="movie__title">{title}</h3>
      <p className="movie__rating">rating: {rating}</p>
      <Link to={`/${id}`}>see more</Link>
    </div>
  );
}

export default Card