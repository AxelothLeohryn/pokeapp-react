import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

const PokemonList = ({ pokemons }) => {
  const printCards = () => {
    return pokemons.map((pokemon) => {
      return <Card key={uuidv4()} pokemon={pokemon} />;
    });
  };
  return <section data-testid="pokemon-list" className="pokemon-list">{printCards()}</section>;
};

export default PokemonList;