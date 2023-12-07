import React, { useContext, useEffect, useState } from "react";

const TypeTag = ({ type }) => {
  const [typeColor, setTypeColor] = useState();
  useEffect(() => {
    console.log(type);
    switch (type) {
      case "Normal":
        setTypeColor("#A8A77A");
        break;
      case "Fighting":
        setTypeColor("#C22E28");
        break;
      case "Flying":
        setTypeColor("#A98FF3");
        break;
      case "Poison":
        setTypeColor("#A33EA1");
        break;
      case "Ground":
        setTypeColor("#E2BF65");
        break;
      case "Rock":
        setTypeColor("#B6A136");
        break;
      case "Bug":
        setTypeColor("#A6B91A");
        break;
      case "Ghost":
        setTypeColor("#735797");
        break;
      case "Steel":
        setTypeColor("#B7B7CE");
        break;
      case "Fire":
        setTypeColor("#EE8130");
        break;
      case "Water":
        setTypeColor("#6390F0");
        break;
      case "Grass":
        setTypeColor("#7AC74C");
        break;
      case "Electric":
        setTypeColor("#F7D02C");
        break;
      case "Psychic":
        setTypeColor("#F95587");
        break;
      case "Ice":
        setTypeColor("#96D9D6");
        break;
      case "Dragon":
        setTypeColor("#6F35FC");
        break;
      case "Dark":
        setTypeColor("#705746");
        break;
      case "Fairy":
        setTypeColor("#D685AD");
        break;
      case "Shadow":
        setTypeColor("black");
        break;
      default:
        setTypeColor("gray");
        break;
    }
  }, [type]);

  const tagStyle = {
    backgroundColor: typeColor,
  };

  return <span className="genre-tag" style={tagStyle}>{type}</span>;
};

export default TypeTag;
