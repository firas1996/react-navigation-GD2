import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { hello } = useOutletContext();
  const { id } = useParams();
  const location = useLocation();
  const { test } = location.state;
  return (
    <div>
      <h1>Product: {id}</h1>
      <h1>{test}</h1>
      <h1>{hello}</h1>
    </div>
  );
};

export default ProductDetails;
