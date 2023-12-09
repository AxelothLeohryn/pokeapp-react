import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TypeTag from "./TypeTag";
import DetailsExtra from "./DetailsExtra";
import axios from "axios";

const Details = () => {
  const [details, setDetails] = useState("");
  const [bio, setBio] = useState("");
  const [color, setColor] = useState();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  function formatId(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return "#" + num;
  }

  const nameLowerCase = queryParams.get("name");
  const name = nameLowerCase.charAt(0).toUpperCase() + nameLowerCase.slice(1);
  const idNumber = queryParams.get("id");
  const id = formatId(idNumber, 3);
  const image = queryParams.get("image");
  const type1LowerCase = queryParams.get("type1");
  const type1 =
    type1LowerCase.charAt(0).toUpperCase() + type1LowerCase.slice(1);
  const type2LowerCase = queryParams.get("type2");
  const type2 =
    type2LowerCase.charAt(0).toUpperCase() + type2LowerCase.slice(1);

  useEffect(() => {
    switch (type1) {
      case "Normal":
        setColor("#AAA67F");
        break;
      case "Fighting":
        setColor("#C12239");
        break;
      case "Flying":
        setColor("#A891EC");
        break;
      case "Poison":
        setColor("#A43E9E");
        break;
      case "Ground":
        setColor("#DEC16B");
        break;
      case "Rock":
        setColor("#B69E31");
        break;
      case "Bug":
        setColor("#A7B723");
        break;
      case "Ghost":
        setColor("#70559B");
        break;
      case "Steel":
        setColor("#B7B9D0");
        break;
      case "Fire":
        setColor("#F57D31");
        break;
      case "Water":
        setColor("#6493EB");
        break;
      case "Grass":
        setColor("#74CB48");
        break;
      case "Electric":
        setColor("#F9CF30");
        break;
      case "Psychic":
        setColor("#FB5584");
        break;
      case "Ice":
        setColor("#9AD6DF");
        break;
      case "Dragon":
        setColor("#7037FF");
        break;
      case "Dark":
        setColor("#75574C");
        break;
      case "Fairy":
        setColor("#E69EAC");
        break;
      case "Shadow":
        setColor("black");
        break;
      default:
        setColor("gray");
        break;
    }
  }, [type1]);
  const themeColor = {
    backgroundColor: color,
  };

  const searchDetails = async (id) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000)); //Siumlate delay REMOVE IN FINAL VERSION
    try {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const resultData = result.data;
      console.log({
        message: "Pokemon details",
        data: resultData,
      });
      setDetails(resultData);
    } catch (error) {
      console.error(error.message);
    }
  };
  const searchBio = async (id) => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const resultData = result.data.flavor_text_entries[0].flavor_text;
      console.log({
        message: "Pokemon bio",
        data: resultData,
      });
      setBio(resultData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    searchDetails(idNumber);
    searchBio(idNumber);
  }, []);

  return (
    <>
      <section id="details">
        <section id="details-nav" style={themeColor}>
          <div id="details-nav-left">
            <img
              onClick={goBack}
              src="/icons/arrow_back.svg"
              alt="Left Arrow"
            />
            <h1>{name}</h1>
          </div>
          <div id="details-nav-right">
            <h2>{id}</h2>
          </div>
        </section>
        <section id="details-main">
          <div id="details-background" className={type1LowerCase}>
            <img id="pokemon-image" src={image} alt={name} />
          </div>
          <section id="genres">
            {type1 !== "Undefined" ? <TypeTag type={type1} /> : null}
            {type2 !== "Undefined" ? <TypeTag type={type2} /> : null}
          </section>

          {details ? (
            <section id="details-main-fetch">
              <DetailsExtra
                details={details}
                bio={bio}
                type={details.types[0].type.name}
                detailsColor={color}
              />
            </section>
          ) : (
            <section id="details-loading">
              <h2>Loading details...</h2>
              <img id="spinner" src="/pikachu.gif" alt="Loading..." />
            </section>
          )}
        </section>
      </section>
    </>
  );
};

export default Details;
