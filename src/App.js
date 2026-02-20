import React, { createContext, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import MovieInfo from "./components/MovieInfo";
import axios from "axios";
export const MoviesContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  const getMovies = async (paramStr) => {
    console.log(
      `https://www.omdbapi.com/?i=tt3896198&apikey=f16911f3&${paramStr}`,
    );
    try {
      console.log(loading);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=f16911f3&${paramStr || ""}`,
      );
      const { Search } = data;
      setMovies(!Search ? null : Search);
    } catch (error) {
      console.log(error);
      console.log(loading);
    } finally {
      console.log(loading);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="App">
      <MoviesContext.Provider
        value={{
          movies,
          setMovies,
          keyword,
          setKeyword,
          loading,
          setLoading,
          getMovies,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:search" element={<Home />} />
            <Route path="/home/:search/:id" element={<MovieInfo />} />
          </Routes>
        </Router>
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
