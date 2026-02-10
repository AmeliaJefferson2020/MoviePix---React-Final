import React from "react";
import MovieProto from "../assets/MovieProto.jpg";

const MovieCards = () => {
  return (
    <section id="movies">
      <div className="movies__container">
        <div className="movies__row">
          <div className="movies__list">
            <div className="movie__card">
              <div className="movie__card--container">
                <figure className="movie__img--wrapper">
                  <img src={MovieProto} className="movie__img" />
                </figure>
                <p>
                  <b>Title: </b>Movie Title
                </p>
                <p>
                  <b>Released: </b>Release Year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCards;
