import Cards from "../components/Cards";
import "../styles/shop.scss";

const Shop = ({ products, cart, handleCart }) => {
  console.log(products);

  return (
    <div className="cardContainer">
      {products.map((prod, index) => (
        <Cards
          cart={cart}
          key={prod.id}
          {...prod}
          handleCart={handleCart}
          isRemovable="true"
        />
      ))}
    </div>
  );
};

export default Shop;
