import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";

const productsData = [
  {
    id: 1,
    name: "Laptop",
    price: 900,
    description: "High performance laptop"
  },
  {
    id: 2,
    name: "Phone",
    price: 600,
    description: "Latest smartphone"
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    description: "Noise cancelling headphones"
  }
];

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Header cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={productsData}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetailsPage
              products={productsData}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
