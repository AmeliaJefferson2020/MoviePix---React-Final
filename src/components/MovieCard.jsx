import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ search, imdbID, poster, title, year, type }) => {
  const navigate = useNavigate();

  return (
    <div
      className="movie__card"
      onClick={() => navigate(`/home/${search}/${imdbID}`)}
    >
      <figure>
        <img src={poster} />
      </figure>
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
};

export default MovieCard;
