import React, { useContext, useEffect, useState } from "react";

const TypeTag = ({ type }) => {
  const [typeColor, setTypeColor] = useState();
  useEffect(() => {
    switch (type) {
      case "Normal":
        setTypeColor("#AAA67F");
        break;
      case "Fighting":
        setTypeColor("#C12239");
        break;
      case "Flying":
        setTypeColor("#A891EC");
        break;
      case "Poison":
        setTypeColor("#A43E9E");
        break;
      case "Ground":
        setTypeColor("#DEC16B");
        break;
      case "Rock":
        setTypeColor("#B69E31");
        break;
      case "Bug":
        setTypeColor("#A7B723");
        break;
      case "Ghost":
        setTypeColor("#70559B");
        break;
      case "Steel":
        setTypeColor("#B7B9D0");
        break;
      case "Fire":
        setTypeColor("#F57D31");
        break;
      case "Water":
        setTypeColor("#6493EB");
        break;
      case "Grass":
        setTypeColor("#74CB48");
        break;
      case "Electric":
        setTypeColor("#F9CF30");
        break;
      case "Psychic":
        setTypeColor("#FB5584");
        break;
      case "Ice":
        setTypeColor("#9AD6DF");
        break;
      case "Dragon":
        setTypeColor("#7037FF");
        break;
      case "Dark":
        setTypeColor("#75574C");
        break;
      case "Fairy":
        setTypeColor("#E69EAC");
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
