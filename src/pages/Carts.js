import React from "react";
import AddCartButton from "../components/AddCartButton";
import { Link } from "react-router-dom";
import { ImBin } from "react-icons/im";
import "../styles/cart.scss";

const Carts = ({ cart, handleCart }) => {
  console.log(handleCart);
  const handleClick = (e) => {
    const id = Number(e.target.closest("[data-id]")?.dataset?.id);
    handleCart(id, e.target.closest("button").dataset.effect);
  };
  return (
    <div className="cart">
      {cart.size ? (
        <>
          <h2>Your Cart</h2>
          <ul className="cart-items">
            {Array.from(cart).map(([id, item]) => {
              return (
                <li key={id} data-id={id} className="cart-item">
                  <div className="img-wrapper">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <h5 className="item-title">{item.title}</h5>
                    <p>{(item.price * item.count).toFixed(2)}$</p>
                    <AddCartButton
                      cart={cart}
                      id={id}
                      handleCart={handleCart}
                      removable="false"
                    />
                  </div>
                  <button
                    onClick={handleClick}
                    data-effect="remove"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <ImBin
                      size={20}
                      style={{ background: "transparent", color: "#fff" }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="checkout">
            <p className="total">
              Total:{" "}
              {Array.from(cart.values())
                .reduce((sum, item) => (sum += item.price * item.count), 0)
                .toFixed(2)}
              &nbsp;$
            </p>
            <div className="buttons">
              <button onClick={handleClick} data-effect="clear">
                Clear
              </button>
              <button>Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="info">
          <div className="Message">
            <h2>Nothing Here!</h2>
            <ImBin size={32} />
          </div>
          <Link to="/shop">
            <button>Go Back!</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Carts;
