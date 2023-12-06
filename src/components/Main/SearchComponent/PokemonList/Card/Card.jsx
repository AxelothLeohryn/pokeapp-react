import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const Card = ({ pokemon }) => {
  const [type, setType] = useState("");
  const [color, setColor] = useState("gray");

  // Get the type of the pokemon in the card
  useEffect(() => {
    setType(pokemon.types[0].type.name);
  }, [pokemon.types]);

  // Get the color that corresponds to the type
  useEffect(() => {
    switch (type) {
      case "normal":
        setColor("#A8A77A");
        break;
      case "fighting":
        setColor("#C22E28");
        break;
      case "flying":
        setColor("#A98FF3");
        break;
      case "poison":
        setColor("#A33EA1");
        break;
      case "ground":
        setColor("#E2BF65");
        break;
      case "rock":
        setColor("#B6A136");
        break;
      case "bug":
        setColor("#A6B91A");
        break;
      case "ghost":
        setColor("#735797");
        break;
      case "steel":
        setColor("#B7B7CE");
        break;
      case "fire":
        setColor("#EE8130");
        break;
      case "water":
        setColor("#6390F0");
        break;
      case "grass":
        setColor("#7AC74C");
        break;
      case "electric":
        setColor("#F7D02C");
        break;
      case "psychic":
        setColor("#F95587");
        break;
      case "ice":
        setColor("#96D9D6");
        break;
      case "dragon":
        setColor("#6F35FC");
        break;
      case "dark":
        setColor("#705746");
        break;
      case "fairy":
        setColor("#D685AD");
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
    borderColor: color,
    backgroundColor: color,
    // boxShadow: `-5px -5px 5px rgba(0, 0, 0, 0.5)`,
  };

  const cardNameBackgroundStyle = {
    backgroundColor: color,
    borderColor: color,
  };

  return (
    <article className="card card-background" style={cardStyle}>
      <Link to={`/pokemon/${pokemon.id}`}>
        <img
          className="card-img"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
        <div className="card-id">
          <span>{"#" + pad(pokemon.id, 3)}</span>
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
