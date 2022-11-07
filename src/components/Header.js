import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "../styles/header.scss";

const Header = () => {
  const [count] = useState(1);
  return (
    <div className="header">
      <Link to="/">
        <h2>Silk Road</h2>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Contact">Contacts</Link>
          </li>
          <li>
            <Link>
              <div className="base">
                <FiShoppingCart />
                <div className="indicator">
                  <div className="noti_count" role="status" value={count}>
                    {count}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
