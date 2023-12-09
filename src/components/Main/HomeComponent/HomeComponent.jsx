import React from "react";
import { useContext } from "react";
import { PokemonContext } from "../../../context/pokemonContext";
import { v4 as uuidv4 } from "uuid";
import Card from "../SearchComponent/PokemonList/Card";

const HomeComponent = () => {
  const { pokemons } = useContext(PokemonContext);
  const printCards = () => {
    return pokemons.map((pokemon) => {
      return <Card key={uuidv4()} pokemon={pokemon} />;
    });
  };

  return (
    <>
      <h1>My Searched Pokemons</h1>
      <section className="pokemon-list">{printCards()}</section>
    </>
  );
};

export default HomeComponent;
