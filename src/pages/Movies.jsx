import React from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import MovieCards from "../components/MovieCards";

const Movies = () => {
  return (
    <section id="search__bar">
      <SearchBar />
      <div className="movies__container">
        <div className="movies__row">
          <div className="search__header">
            <h2 className="search__result--title">Search Results:</h2>
            <select id="sort">
              <option value disbaled selected>
                Sort By Year
              </option>
              <option value="NEWEST_TO_OLDEST">Newest To Oldest</option>
              <option value="OLDEST_TO_NEWEST">Oldest To Newest</option>
            </select>
          </div>
          <MovieCards />
        </div>
      </div>
    </section>
  );
};

export default Movies;
