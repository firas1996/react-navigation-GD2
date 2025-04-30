import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/Products/1">Products 1</Link>
        </li>
        <li>
          <Link to="/Products/2">Products 2</Link>
        </li>
        <li>
          <Link to="/Products/3">Products 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
