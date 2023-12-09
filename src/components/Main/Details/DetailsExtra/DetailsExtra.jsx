import React, { useEffect, useState } from "react";

const DetailsExtra = ({ details, bio, type, detailsColor }) => {

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const textStyle = {
    color: detailsColor,
  };

  console.log(detailsColor);
  return (
    <>
      <section id="details-main-about">
        {bio.length > 0 ? <p id="details-main-bio">{bio.replace(/[\n\f]/g, " ")}</p> : <p>No biography found for this pokemon.</p>}
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
