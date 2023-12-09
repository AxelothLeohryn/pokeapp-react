import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  const [type, setType] = useState("");
  const [cardColor, setColor] = useState();

  function formatId(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return "#" + num;
  }

  // Get the 1st type of the pokemon in the card
  useEffect(() => {
    setType(pokemon.types[0].type.name);
  }, [pokemon.types]);

  // Get the color that corresponds to the type
  useEffect(() => {
    switch (type) {
      case "normal":
        setColor("#AAA67F");
        break;
      case "fighting":
        setColor("#C12239");
        break;
      case "flying":
        setColor("#A891EC");
        break;
      case "poison":
        setColor("#A43E9E");
        break;
      case "ground":
        setColor("#DEC16B");
        break;
      case "rock":
        setColor("#B69E31");
        break;
      case "bug":
        setColor("#A7B723");
        break;
      case "ghost":
        setColor("#70559B");
        break;
      case "steel":
        setColor("#B7B9D0");
        break;
      case "fire":
        setColor("#F57D31");
        break;
      case "water":
        setColor("#6493EB");
        break;
      case "grass":
        setColor("#74CB48");
        break;
      case "electric":
        setColor("#F9CF30");
        break;
      case "psychic":
        setColor("#FB5584");
        break;
      case "ice":
        setColor("#9AD6DF");
        break;
      case "dragon":
        setColor("#7037FF");
        break;
      case "dark":
        setColor("#75574C");
        break;
      case "fairy":
        setColor("#E69EAC");
        break;
      case "shadow":
        setColor("black");
        break;
      default:
        setColor("gray");
        break;
    }
  }, [type]);

  //Inline styles for the card, each card will have different colors according to the pokemon type
  const cardStyle = {
    borderColor: cardColor,
    backgroundColor: cardColor,
    // boxShadow: `-5px -5px 5px rgba(0, 0, 0, 0.5)`,
  };

  const cardNameBackgroundStyle = {
    backgroundColor: cardColor,
    borderColor: cardColor,
  };

  //Prepare pokemon url to pass data through query params
  const pokemonQuery = {
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites.other["official-artwork"].front_default,
    type1: pokemon.types[0]?.type.name,
    type2: pokemon.types[1]?.type.name, //it might not have a 2nd type
  };
  const queryString = new URLSearchParams(pokemonQuery).toString();
  const pokemonUrl = `/pokemon/${pokemon.id}?${queryString}`;

  return (
    <article className="card card-background" style={cardStyle}>
      <Link to={pokemonUrl}>
        <img
          className="card-img"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
        <div className="card-id">
          <span>{formatId(pokemon.id, 3)}</span>
        </div>
        <div className="card-name-background" style={cardNameBackgroundStyle}>
          <h3 className="card-name">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h3>
        </div>
      </Link>
    </article>
  );
};

export default Card;
