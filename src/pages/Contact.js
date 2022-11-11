import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/contact.scss";
import wavebottom from "../assets/wave-bottom.svg";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="cardBlock">
          <a href="https://github.com/nimishgo">
            <FaGithub size={100} />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <FaInstagram size={100} />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <FaTwitter size={100} />
          </a>
        </div>
        <h6 className="address">Silk Road , Somwhere in India</h6>
      </div>
      <img src={wavebottom} alt="wavebottom" className="waveBottom" />
    </>
  );
};

export default Contact;
