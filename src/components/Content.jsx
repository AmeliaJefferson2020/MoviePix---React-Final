import React from "react";
import { useParams } from "react-router-dom";

const Content = () => {
  return (
    <section id="search">
      <div id="filter" className="content__wrapper content__wrapper--search">
        <div className="search__result">
          <h2 className="result__title">Search Results :</h2>
          <span id="search__keyword"></span>
        </div>
        <select name="movieSort" id="movieSort" onChange="sortChange(event)">
          <option value="default" selected disabled>
            Sort By Year
          </option>
          <option value="NEWEST_TO_OLDEST">Newest To Oldest</option>
          <option value="OLDEST_TO_NEWEST">Oldest To Newest</option>
        </select>
        <div id="filter"></div>
        <div className="loading__state">
          <svg
            data-v-cf78a876=""
            data-v-ca62299c=""
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="spinner"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-spinner fa-w-16 loading-spinner"
          >
            <path
              data-v-cf78a876=""
              fill="currentColor"
              d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
              className=""
            ></path>
          </svg>
        </div>
        <div id="movies" className="cards"></div>
      </div>
    </section>
  );
};

export default Content;
