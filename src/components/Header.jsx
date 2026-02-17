import React from "react";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <Nav />
      <Search />
      <div className="overlay"></div>
    </header>
  );
};

export default Header;
