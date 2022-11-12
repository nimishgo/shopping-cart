import React from "react";

const AddCartButton = ({ cart, id, handleCart, isRemovable }) => {
  const handleClick = (e) => {
    console.log(e.target.closest("[data-id]"));
    const id = Number(e.target.closest("[data-id]").dataset.id);
    handleCart(id, e.target.dataset.effect);
  };

  // console.log(id, cart.get(id));

  if (cart.get(id) === undefined || cart.get(id).count === 0) {
    return (
      <div className="item-control">
        <button onClick={handleClick} data-effect="add">
          Add to cart
        </button>
      </div>
    );
  } else {
    return (
      <div className="item-control incdec">
        {isRemovable === "false" && cart.get(id).count === 1 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={handleClick} data-effect="decrease">
            -
          </button>
        )}
        <span>{cart.get(id).count}</span>
        <button onClick={handleClick} data-effect="increase">
          +
        </button>
      </div>
    );
  }
};

export default AddCartButton;
