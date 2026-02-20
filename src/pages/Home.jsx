import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../assets/LoadingSpinner.gif";

const Home = () => {
  const {
    movies,
    keyword,
    setKeyword,
    loading,
    setLoading,
    setMovies,
    getMovies,
  } = useContext(MoviesContext);
  const [sortedMovies, setSortedMovies] = useState([]);
  const { search } = useParams();
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("default");

  function searchChange(eventParam) {
    console.log(eventParam.target.value);
    setKeyword(eventParam.target.value);
    setLoading(true);
    navigate(`/home/${eventParam.target.value}`);
    getMovies(eventParam.target.value);
  }

  function sortChange(event) {
    const sortedOption = event.target.value;
    const sortedList = [...movies];

    if (sortedOption === "NEWEST_TO_OLDEST") {
      sortedList.sort((a, z) => parseInt(z.Year) - parseInt(a.Year));
    } else if (sortedOption === "OLDEST_TO_NEWEST") {
      sortedList.sort((a, z) => parseInt(a.Year) - parseInt(z.Year));
    }
    setSortedMovies(sortedList);
  }

  const resetSorting = () => {
    setSortOption("default");
  };

  useEffect(() => {
    setSortedMovies([]);
    console.log(movies, typeof movies);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if ((!movies || movies.length === 0) && search) {
      setLoading(true);
      getMovies(`s=${search}`);
    }
  }, [loading, setLoading, search, movies, setMovies, getMovies]);

  return (
    <>
      <header>
        <Nav />
        <Search searchChange={searchChange} keyword={keyword} />
        <div className="overlay"></div>
      </header>
      <section id="search">
        <div id="filter" className="content__wrapper content__wrapper--search">
          <div className="search__result">
            <h2 className="result__title">Search Results :</h2>
            <span id="search__keyword">{search ? search : keyword}</span>
          </div>
          <select
            name="movieSort"
            id="movieSort"
            value={sortOption}
            onChange={(event) => sortChange(event, movies)}
          >
            <option value="default" selected disabled>
              Sort By Year
            </option>
            <option value="NEWEST_TO_OLDEST">Newest To Oldest</option>
            <option value="OLDEST_TO_NEWEST">Oldest To Newest</option>
          </select>
        </div>
        <div id="movies" className="cards">
          {loading ? (
            <div className="loading-state">
              <img src={LoadingSpinner} className="spinner" />
            </div>
          ) : !movies || (movies.length === 0 && loading === false) ? (
            <div className="no__results">No Result </div>
          ) : sortedMovies.length !== 0 ? (
            sortedMovies.map((movie, index) => (
              <MovieCard
                key={index}
                imdbID={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
              />
            ))
          ) : (
            movies.map((movie, index) => (
              <MovieCard
                key={index}
                search={search}
                imdbID={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
