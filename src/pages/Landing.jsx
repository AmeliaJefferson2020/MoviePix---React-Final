import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../App";

const Landing = () => {
  const navigate = useNavigate();
  const { movies, keyword, setKeyword, loading, setLoading, getMovies } =
    useContext(MoviesContext);

  useEffect(() => {
    setLoading(false);
    console.log(keyword);
  }, [keyword]);

  function searchChangeLanding(eventParam) {
    const valueHolder = eventParam.target.value;
    console.log(valueHolder);
    setLoading(true);
    setKeyword(valueHolder);
    getMovies(`s=${valueHolder}`);
    navigate(`/home/${valueHolder}`);
  }

  return (
    <div>
      <header>
        <Nav landing />
        <Search
          landing
          keyword={keyword}
          setKeyword={setKeyword}
          searchChangeLanding={searchChangeLanding}
        />
      </header>
    </div>
  );
};

export default Landing;
