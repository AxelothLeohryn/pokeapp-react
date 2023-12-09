import React, { useEffect, useState, useContext } from "react";
import { PokemonContext } from "../../../context/pokemonContext";
import Search from "./Search";
import PokemonList from "./PokemonList";
import axios from "axios";

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
      document.getElementById("search-bar").value = ""; //Empty the search bar
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSearch = (event) => {
    event.preventDefault();
    const newSearch = event.target.search.value.toLowerCase();
    const regex = /^[a-zA-Z0-9]+$/;
    if (regex.test(newSearch)) {
      console.log("New search: " + newSearch);
      setSearch(newSearch);
    } else {
      console.log("Invalid input: only letters and numbers are allowed."); //Change for popup later
    }

    event.target.search.value = ""; //Empty the search bar
  };
  const handleSearchInput = (event) => {
    event.preventDefault();
    const newSearchInput = event.target.value.toLowerCase();
    setSearchInput(newSearchInput);
  };

  //When search changes (user submitted search form), search for pokemon
  useEffect(() => {
    let pokeNames = pokemons.map((pokemon) => pokemon.name);
    let pokeIds = pokemons.map((pokemon) => pokemon.id);
    let coincidence =
      pokeNames.includes(search) || pokeIds.includes(Number(search));
    if (
      search.length > 0 && //Check that the searched pokemon is not already in the list, by name or id
      !coincidence
    ) {
      searchPokemon(search);
    }
  }, [search]);

  //When searchInput changes and stays for 2 seconds, search for pokemon
  let pokeNames = pokemons.map((pokemon) => pokemon.name);
    let pokeIds = pokemons.map((pokemon) => pokemon.id);
    let coincidence =
      pokeNames.includes(searchInput) || pokeIds.includes(Number(searchInput));
    const regex = /^[a-zA-Z0-9]+$/;
  useEffect(() => {
    // console.log("Im changing");
    if (
      searchInput.length > 0 && //Check that the searched pokemon is not already in the list, by name or id
      !coincidence &&
      regex.test(searchInput)
    ) {
      const setNewSearchInput = setTimeout(() => {
        searchPokemon(searchInput);
      }, 2000);
      return () => clearTimeout(setNewSearchInput);
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
