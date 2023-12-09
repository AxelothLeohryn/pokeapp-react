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
      <h1 id="home-title">My Searched Pokemons</h1>
      {pokemons.length > 0 ? (
        <section className="pokemon-list">{printCards()}</section>
      ) : (
        <h2 id="not-searched-title" style={{color: "gray"}}>You haven't searched any pokemons yet.</h2>
      )}
    </>
  );
};

export default HomeComponent;
