import React from "react";

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
      </div>
    </div>
  );
}

export default ItemCardComponent;
