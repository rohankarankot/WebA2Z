import React from "react";
import { Link } from "react-router-dom";

function ItemCardComponent({ product }) {
  console.log("product: ", product);
  return (
    <Link to={`/product?id=${product.id}`} style={{ textDecoration: "none" }}>
      <div className="card">
        <h3>{product.vendor}</h3>
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="text-center">{product.title}</h5>
          <p className="text-center">{product.des}</p>
        </div>
      </div>
    </Link>
  );
}

export default ItemCardComponent;
