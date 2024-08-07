import React from "react";


function ItemCardComponent({ product }) {
  return (
    <div className="card">
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="text-center">{product.title}</h5>
        <p className="text-center">{product.description}</p>
      </div>
    </div>
  );
}

export default ItemCardComponent;
