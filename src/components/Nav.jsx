import React from "react";
import MovieLogo from "../assets/MovieLogo.png";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={MovieLogo} className="logo" />
        </a>
        <ul className="nav__links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
