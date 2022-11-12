import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "../styles/header.scss";

const Header = ({ cart }) => {
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
            <Link to="/Carts">
              <div className="base">
                <FiShoppingCart />
                <div className="indicator">
                  <div className="noti_count" role="status" value={cart.size}>
                    {cart.size}
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
