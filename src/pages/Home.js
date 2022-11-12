import React from "react";
import "../styles/home.scss";
import wavebottom from "../assets/wave-bottom.svg";
import Button from "../components/Button";
const Home = () => {
  return (
    <>
      <div className="container">
        <Button />
        <div className="blob"></div>
      </div>
      <img src={wavebottom} alt="wavebottom" className="waveBottom" />
    </>
  );
};

export default Home;
