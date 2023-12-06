import React, { useEffect, useState, useContext } from "react";
import { PokemonContext } from "../../../context/pokemonContext";
import Search from "./Search";
import PokemonList from "./PokemonList";
import axios from "axios";

//HACER FETCH, YA TENGO POKEMONS TRAIDOS DE CONTEXT

const SearchComponent = () => {
  const { pokemons, setPokemons } = useContext(PokemonContext);
  const [search, setSearch] = useState(""); //Value of the submitted search form
  const [searchInput, setSearchInput] = useState(""); //Keeps track of the current .value of the search form

  const searchPokemon = async (search) => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      const resultData = result.data;
      console.log(resultData);
      setPokemons([resultData, ...pokemons]);
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSearch = (event) => {
    event.preventDefault();
    const newSearch = event.target.search.value.toLowerCase();
    event.target.search.value = ""; //Empty the search bar
    console.log("New search: " + newSearch);
    setSearch(newSearch);
  };
  const handleSearchInput = (event) => {
    event.preventDefault();
    const newSearchInput = event.target.value;
    setSearchInput(newSearchInput);
  };

  //When search changes (user submitted search form), search for pokemon
  useEffect(() => {
    let pokeNames = pokemons.map((pokemon) => pokemon.name);
    let coincidence = pokeNames.includes(search);
    if (
      search.length > 0 && //Check that the searched pokemon is not already in the list
      !coincidence
    ) {
      searchPokemon(search);
    }
  }, [search]);

  //When searchInput changes and stays for 2 seconds, search for pokemon
  useEffect(() => {
    let pokeNames = pokemons.map((pokemon) => pokemon.name);
    let coincidence = pokeNames.includes(searchInput);
    if (
      searchInput.length > 0 && //Check that the searched pokemon is not already in the list
      !coincidence
    ) {
      const getData = setTimeout(() => {
        searchPokemon(searchInput);
        document.getElementById("search-bar").value = ""; //Empty the search bar
      }, 2000);
      return () => clearTimeout(getData);
    }
  }, [searchInput]);

  return (
    <>
      <Search
        handleSearch={handleSearch}
        handleSearchInput={handleSearchInput}
      />
      <PokemonList pokemons={pokemons} />
    </>
  );
};

export default SearchComponent;
