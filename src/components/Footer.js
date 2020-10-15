import React from "react";
import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  return <footer>&copy; Copyright {date.getFullYear()}, JHYOON</footer>;
};

export default Footer;
