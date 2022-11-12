import React from "react";
import AddCartButton from "./AddCartButton";
import "../styles/cards.scss";

const Cards = ({ cart, id, title, price, image, handleCart, isRemovable }) => {
  // console.log(cart, id, handleCart, isRemovable);

  console.log(handleCart);
  return (
    <div key={id} className="cardsName" data-id={id}>
      <div key={id} className="products">
        <div className="imgContainer">
          <img src={image} alt={title} />
        </div>
        <p className="title">{title}</p>
        <p className="price">{price}&nbsp;$</p>

        <AddCartButton
          cart={cart}
          id={id}
          data-id={id}
          handleCart={handleCart}
          isRemovable={isRemovable}
        />
      </div>
    </div>
  );
};

export default Cards;
