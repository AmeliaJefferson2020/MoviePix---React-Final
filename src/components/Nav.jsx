import React from "react";
import MovieLogo from "../assets/MovieLogo.png";
import { Link } from "react-router-dom";

const Nav = ({ landing, cardinfo }) => {
  return (
    <nav className={landing || cardinfo ? "landing" : ""}>
      <div className="logo">
        <Link to="/">
          <img
            src={landing || cardinfo ? MovieLogo : MovieLogo}
            className="logo__img"
          />
        </Link>
      </div>
      <div className="nav__links">
        <Link to="/" className="nav__link">Home</Link>
        <Link to="/home" className="nav__link">Find Your Movie</Link>
      </div>
    </nav>
  );
};

export default Nav;
