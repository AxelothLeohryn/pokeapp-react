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
        <img id="search-title-icon" src="/icons/pokefinder.svg" />
        <h1>PokeSearcher</h1>
      </div>
      <form id="search-form" onSubmit={handleSearch}>
        <img id="search-form-icon" src="/icons/magnifying-glass.svg" alt="" />
        <input
          onChange={handleSearchInput}
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search for a pokemon..."
        />
        <img
          onClick={clearSearch}
          id="search-cancel-icon"
          src="/icons/xmark.svg"
          alt=""
        />
        {/* <button>Search</button> */}
      </form>
    </>
  );
};

export default Search;
