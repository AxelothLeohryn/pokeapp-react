import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          PokeSearcher
        </NavLink>

        <NavLink
          to="/newPokemon"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          PokeLab
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
