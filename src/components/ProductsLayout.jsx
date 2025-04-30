import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const ProductsLayout = () => {
  const test = "abc";
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>
          <Link to="/Products/1" state={{ test: "abc" }}>
            Products 1
          </Link>
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
      <Outlet context={{ hello: "world !!!" }} />
    </div>
  );
};

export default ProductsLayout;
