import React from "react";

function ItemCardComponent({ product }) {
  // console.log("product: ", product);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={product.thumbnail}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ItemCardComponent;
