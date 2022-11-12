import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import "./global.scss";
import Contact from "./pages/Contact";
import Carts from "./pages/Carts";
import { useEffect, useState } from "react";
function App() {
  const [cart, setCart] = useState(new Map());
  const [products, setProd] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProd([...json]));
  }, []);

  const addToCart = (newProd) => {
    let newCart = new Map(cart);
    console.log(newCart);
    newCart.set(newProd.id, { ...newProd, count: 1 });
    setCart(newCart);
  };

  const increaseCartItemCount = (id) => {
    let newCart = new Map(cart);
    newCart.get(id).count++;
    setCart(newCart);
  };

  const decreaseCartItemCount = (id) => {
    let newCart = new Map(cart);

    if (newCart.get(id).count === 1) {
      newCart.delete(id);
    } else {
      newCart.get(id).count--;
    }
    setCart(newCart);
  };

  const removeCartItem = (id) => {
    let newCart = new Map(cart);
    newCart.delete(id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart(new Map());
  };

  const handleCart = (id, action) => {
    if (action === "add") {
      const newProd = products.find((item) => item.id === id);
      addToCart(newProd);
    } else if (action === "increase") {
      increaseCartItemCount(id);
    } else if (action === "decrease") {
      decreaseCartItemCount(id);
    } else if (action === "clear") {
      clearCart();
    } else if (action === "remove") {
      removeCartItem(id);
    }
  };

  return (
    // <BrowserRouter>
    <>
      <Header cart={cart} />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Shop"
            element={
              <Shop cart={cart} handleCart={handleCart} products={products} />
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/Carts"
            element={<Carts cart={cart} handleCart={handleCart} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
    // </BrowserRouter>
  );
}

export default App;
