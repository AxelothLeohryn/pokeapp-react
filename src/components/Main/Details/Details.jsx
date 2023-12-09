import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TypeTag from "./TypeTag";
import DetailsExtra from "./DetailsExtra";
import axios from "axios";

const Details = () => {
  const [details, setDetails] = useState();
  const [bio, setBio] = useState("");

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
        <section id="details-nav">
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
          <img id="pokemon-image" src={image} alt={name} />
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
              />
            </section>
          ) : <section id="details-loading"><h2>Loading details...</h2><img id="spinner" src="/pikachu.gif" alt="Loading..." /></section>}
        </section>
      </section>
    </>
  );
};

export default Details;
