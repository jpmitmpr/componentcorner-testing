import React from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = ({ products, addToCart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
