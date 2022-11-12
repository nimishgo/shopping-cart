import React from "react";
import { Link } from "react-router-dom";
import "../styles/button.scss";
const Button = () => {
  return (
    <>
      <Link to="/Shop">
        <button className="button">SHOP!</button>
      </Link>
    </>
  );
};

export default Button;
