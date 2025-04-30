import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const test = "abc";
  const navigate = useNavigate();
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        <li>
          <p
            onClick={() => {
              navigate("/Products/1", { state: { test: "abc" } });
            }}
          >
            Products 1
          </p>
        </li>
        <li>
          <Link to="/Products/2" state={{ test: "123" }}>
            Products 2
          </Link>
        </li>
        <li>
          <Link to="/Products/3" state={{ test: "test" }}>
            Products 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
