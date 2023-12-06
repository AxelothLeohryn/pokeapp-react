import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul  className="nav-ul">
          <li className="nav-link"><Link to={'/'}>Home</Link></li>
          <li className="nav-link"><Link to={'/search'}>Search</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
