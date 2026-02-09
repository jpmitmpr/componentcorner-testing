import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header style={{ padding: "15px", borderBottom: "1px solid gray" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "15px" }}>Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </header>
  );
};

export default Header;
