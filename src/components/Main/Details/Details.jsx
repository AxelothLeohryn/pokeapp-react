import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TypeTag from "./TypeTag";

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const Details = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const nameLowerCase = queryParams.get("name");
  const name = nameLowerCase.charAt(0).toUpperCase() + nameLowerCase.slice(1);
  const idNumber = queryParams.get("id");
  const id = "#" + pad(idNumber, 3);
  const image = queryParams.get("image");
  const type1LowerCase = queryParams.get("type1");
  const type1 = type1LowerCase.charAt(0).toUpperCase() + type1LowerCase.slice(1)
  const type2LowerCase = queryParams.get("type2");
  const type2 = type2LowerCase.charAt(0).toUpperCase() + type2LowerCase.slice(1)

  return (
    <>
      <section id="details-page">
        <section id="details-nav">
          <div id="details-nav-left">
            <img
              onClick={goBack}
              src="/icons/arrow-left.svg"
              alt="Left Arrow"
            />
            <h1>{name}</h1>
          </div>
          <div id="details-nav-right">
            <h2>{id}</h2>
          </div>
        </section>
        <img id="pokemon-image" src={image} alt={name} />
        <section id="details-box">
          <section id="genres">
            {type1 !== "Undefined" ? <TypeTag type={type1} /> : null}
            {type2 !== "Undefined" ? <TypeTag type={type2} /> : null}
          </section>
          <p>MORE DETAILS...</p>
        </section>
      </section>
    </>
  );
};

export default Details;
