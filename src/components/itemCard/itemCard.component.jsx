import React from "react";
import { Link } from "react-router-dom";

function ItemCardComponent({ product }) {
  return (
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
        <Link to={"/product"}>
          <button className="btn btn-link"> View More</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemCardComponent;
