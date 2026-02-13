import SearchBar from "../components/SearchBar";

const Movies = () => {
  return (
    <section id="search__bar">
      <SearchBar />
      <div className="movies__container">
        <div className="movies__row">
          <div className="search__header">
            <h2 className="search__result--title">Search Results:</h2>
            <select id="sort">
              <option disabled={true}>Sort By Year</option>
              <option value="NEWEST_TO_OLDEST">Newest To Oldest</option>
              <option value="OLDEST_TO_NEWEST">Oldest To Newest</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
