import React from "react";
import SearchBar from "../components/SearchBar";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's Most Awarded Movie Subscription Platform</h1>
            <h2>
              Find Your Favorite Movie With{" "}
              <span className="yellow">MoviePix</span>
            </h2>
          </div>
        </div>
        <SearchBar />
      </header>
    </section>
  );
};

export default Landing;
