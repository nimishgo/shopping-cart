import React from "react";
import "../styles/footer.scss";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="footer">
      <a href="https://github.com/nimishgo">
        &copy; {year.getFullYear()} nimishgo <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
