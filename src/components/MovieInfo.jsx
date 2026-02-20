import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MoviesContext } from "../App";
import Rating from "./UI/Rating";
import BoxOffice from "./UI/BoxOffice";
import Movie from "./UI/Movie";
import Nav from "./Nav";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
library.add(faBars, faTimes, faStar, faStarHalfAlt, faArrowLeft);

const MovieInfo = () => {
  const { search, id } = useParams();
  const [currentMovie, setCurrentMovie] = useState(null);
  const { movies, setMovies, loading, setLoading, getMovies } =
    useContext(MoviesContext);

  const getMovieId = async (paramId) => {
    console.log(`https://www.omdbapi.com/?apikey=f16911f3&i=${paramId}`);
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=f16911f3&i=${paramId}`
      );
      if (response.data.Response === "True") {
        setCurrentMovie(response.data);
      } else if (response.data.Response === "False") {
        console.error("Movie Not Found:", response.data.Error);
        setCurrentMovie(null);
      }
    } catch (error) {
      console.error("Error Fetching Movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getMovieId(id);
    }
  }, [id]);

  const title = currentMovie?.Title || "Loading...";
  const revenue = currentMovie?.BoxOffice || "0";
  const plot = currentMovie?.Plot || "Plot Not Available";
  const rated = currentMovie?.Rated || "N/A";
  const year =
    currentMovie && currentMovie.Released ? currentMovie.Released : "";
  const runtime = currentMovie?.Runtime || "N/A";
  const genre = currentMovie?.Genre || "N/A";
  const language = currentMovie?.Language || "N/A";
  const country = currentMovie?.Country || "N/A";
  const poster = currentMovie?.Poster || null;

  function convertToDate(paramStr) {
    const dateStr = paramStr;
    const dateObj = new Date(dateStr);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = dateObj.getMonth() + 1;
    const formatDate = `${String(months[monthIndex].slice(0, 3).toUpperCase()).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, 0)}-${dateObj.getFullYear()}`;
    console.log(formatDate);
    return formatDate;
  }

  function convertToHrAndMin(paramTime) {
    if (!paramTime || paramTime === "") {
      paramTime = "106 mins";
    }

    const minStr = paramTime.slice(0, paramTime.indexOf(" "));
    const hour = Math.floor(+minStr / 60);
    const minutes = +minStr % 60;
    const runtimeStr = `${hour} hr and ${minutes} minutes`;

    return runtimeStr;
  }

  return (
    <>
      {currentMovie ? (
        <>
          <div className="page__header">
            <Nav cardinfo />
          </div>
          <div id="movies__body">
            <main id="movies__main">
              <div className="movies__container">
                <div className="movies__wrapper">
                  <div className="movie__selected--top">
                    <Link to={`/home/${search}`} className="movie__link">
                      <FontAwesomeIcon icon="arrow-left" />
                    </Link>
                    <Link to={`/home/${search}`} className="movie__link">
                      {console.log("187", search, id)}
                      <h2 className="movie__selected--title--top">Movies</h2>
                    </Link>
                  </div>
                  <div className="movie__selected">
                    <figure className="movie__selected--figure">
                      <img
                        src={poster}
                        alt=""
                        className="movie__selected--img"
                      />
                    </figure>
                    <div className="movie__selected--description">
                      <h2 className="movie__selected--title">{title}</h2>
                      {currentMovie ? (
                        <Rating rating={+currentMovie.omdbRating}></Rating>
                      ) : (
                        <></>
                      )}
                      <div className="movie__selected--price">
                        {revenue !== "0" ? (
                          <BoxOffice
                            revenue={+revenue.replace(/[$,]/g, "")}
                          ></BoxOffice>
                        ) : (
                          <div>N/A</div>
                        )}
                      </div>
                      <div className="movie__summary">
                        <div className="movie__summary--title">Plot</div>
                        <p className="movie__summary--para">{plot}</p>
                        <ul className="movie__summary--details">
                          <li>
                            {" "}
                            Rated : <span>{rated}</span>
                          </li>
                          <li>
                            {" "}
                            Released Date :{" "}
                            <span>
                              {year && year !== "N/A" && year !== ""
                                ? convertToDate(year)
                                : "N/A"}
                            </span>
                          </li>
                          <li>
                            {" "}
                            Duration :{" "}
                            <span>
                              {runtime || runtime !== ""
                                ? convertToHrAndMin(runtime)
                                : "N/A"}
                            </span>
                          </li>
                          <li>
                            {" "}
                            Genre : <span>{genre}</span>
                          </li>
                          <li>
                            {" "}
                            Language : <span>{language}</span>
                          </li>
                          <li>
                            {" "}
                            Country : <span>{country}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="movies__container">
                <div className="movies__wrapper">
                  <div className="movie__selected--top">
                    <h2 className="movie__selected--title--top">
                      Recommended Movies
                    </h2>
                  </div>
                  <div className="movies">
                    {console.log("225", movies, typeof movies)}
                    {movies
                      .filter((movie) => movie.imdbID !== id)
                      .slice(0, 4)
                      .map((movie, index) => (
                        <Movie
                          search={search}
                          movie={movie}
                          key={index}
                          index={index}
                          title={title}
                          convertToDate={convertToDate}
                          convertToHrAndMin={convertToHrAndMin}
                          getMovieId={getMovieId}
                        ></Movie>
                      ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </>
      ) : (
        <>
          <div className="movie__img--skeleton"></div>
          <div className="skeleton movie__title--skeleton"></div>
          <div className="skeleton movie__rating--skeleton"></div>
          <div className="skeleton movie__price--skeleton"></div>
        </>
      )}
    </>
  );
};

export default MovieInfo;
