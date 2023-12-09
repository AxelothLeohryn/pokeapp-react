import React from "react";

const Search = ({ handleSearch, handleSearchInput }) => {
  const searchBar = document.getElementById("search-bar");

  const clearSearch = (event) => {
    event.preventDefault();
    searchBar.value = "";
  };

  return (
    <>
      <div id="search-title">
        <img id="search-title-icon" src="/icons/pokeball.svg" />
        <h1>PokeSearcher</h1>
      </div>
      <form id="search-form" onSubmit={handleSearch}>
        <img id="search-form-icon" src="/icons/search.svg" alt="" />
        <input
          onChange={handleSearchInput}
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search"
        />
        <img
          onClick={clearSearch}
          id="search-cancel-icon"
          src="/icons/close.svg"
          alt=""
        />
        {/* <button>Search</button> */}
      </form>
    </>
  );
};

export default Search;
