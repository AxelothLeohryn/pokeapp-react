import React, { useEffect, useState } from "react";

const DetailsExtra = ({ details, bio, type }) => {
  const [detailsColor, setDetailsColor] = useState("black");
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    switch (type) {
      case "normal":
        setDetailsColor("#AAA67F");
        break;
      case "fighting":
        setDetailsColor("#C12239");
        break;
      case "flying":
        setDetailsColor("#A891EC");
        break;
      case "poison":
        setDetailsColor("#A43E9E");
        break;
      case "ground":
        setDetailsColor("#DEC16B");
        break;
      case "rock":
        setDetailsColor("#B69E31");
        break;
      case "bug":
        setDetailsColor("#A7B723");
        break;
      case "ghost":
        setDetailsColor("#70559B");
        break;
      case "steel":
        setDetailsColor("#B7B9D0");
        break;
      case "fire":
        setDetailsColor("#F57D31");
        break;
      case "water":
        setDetailsColor("#6493EB");
        break;
      case "grass":
        setDetailsColor("#74CB48");
        break;
      case "electric":
        setDetailsColor("#F9CF30");
        break;
      case "psychic":
        setDetailsColor("#FB5584");
        break;
      case "ice":
        setDetailsColor("#9AD6DF");
        break;
      case "dragon":
        setDetailsColor("#7037FF");
        break;
      case "dark":
        setDetailsColor("#75574C");
        break;
      case "fairy":
        setDetailsColor("#E69EAC");
        break;
      case "shadow":
        setDetailsColor("black");
        break;
      default:
        setDetailsColor("gray");
        break;
    }
  }, [type]);

  const textStyle = {
    color: detailsColor,
  };
  const barStyle = {
    backgroundColor: "#e0e0de", // background color for the unfilled part
    color: detailsColor, // color for the filled part (this sets the text color in some browsers)
  };
  return (
    <>
      <section id="details-main-about">
        <p id="details-main-bio">{bio.replace(/[\n\f]/g, " ")}</p>
        <h2 style={textStyle}>About</h2>
        <div id="details-main-about-container">
          <div className="properties-box ">
            <div className="properties-value">
              <img src="/icons/weight.svg" alt="weigth" />
              <p>{details.weight} kg</p>
            </div>
            <p className="properties-tag">Weight</p>
          </div>
          <div className="properties-box">
            <div className="properties-value">
              <img id="height-img" src="/icons/straighten.svg" alt="height" />
              <p>{details.height} m</p>
            </div>
            <p className="properties-tag">Height</p>
          </div>
          <div id="properties-box-moves" className="properties-box">
            <div className="properties-value">
              <div id="moves">
                {details.abilities.map((ability, index) => (
                  <p key={index}>{capitalize(ability.ability.name)}</p>
                ))}
              </div>
            </div>
            <p className="properties-tag">Moves</p>
          </div>
        </div>
      </section>

      <h2 style={textStyle}>Base Stats</h2>
      <section id="details-main-stats">
        <article id="hp">
          <h4>HP</h4>
          <p className="stat-value">{details.stats[0].base_stat}</p>
          <progress
            className={`stat-bar ${type}-progress`} // Apply dynamic class based on type
            value={details.stats[0].base_stat}
            max="255"
          ></progress>
        </article>
        <article id="atk">
          <h4>ATK</h4>
          <p className="stat-value">{details.stats[1].base_stat}</p>
          <progress
            className={`stat-bar ${type}-progress`}
            value={details.stats[1].base_stat}
            max="255"
          ></progress>
        </article>
        <article id="def">
          <h4>DEF</h4>
          <p className="stat-value">{details.stats[2].base_stat}</p>
          <progress
            className={`stat-bar ${type}-progress`}
            value={details.stats[2].base_stat}
            max="255"
          ></progress>
        </article>
        <article id="satk">
          <h4>SATK</h4>
          <p className="stat-value">{details.stats[3].base_stat}</p>
          <progress
            className={`stat-bar ${type}-progress`}
            value={details.stats[3].base_stat}
            max="255"
          ></progress>
        </article>
        <article id="sdef">
          <h4>SDEF</h4>
          <p className="stat-value">{details.stats[4].base_stat}</p>
          <progress
            className={`stat-bar ${type}-progress`}
            value={details.stats[4].base_stat}
            max="255"
          ></progress>
        </article>
        <article id="spd">
          <h4>SPD</h4>
          <p className="stat-value">{details.stats[5].base_stat}</p>
          <progress
            className={`stat-bar ${type}-progress`}
            value={details.stats[5].base_stat}
            max="255"
          ></progress>
        </article>
      </section>
    </>
  );
};

export default DetailsExtra;
