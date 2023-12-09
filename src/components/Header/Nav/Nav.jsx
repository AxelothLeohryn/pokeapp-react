import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>

        <NavLink to="/search" activeClassName="active">
          Search
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
