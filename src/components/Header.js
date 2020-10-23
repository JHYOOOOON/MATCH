import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">MATCH!</Link>
    </header>
  );
};

export default Header;
