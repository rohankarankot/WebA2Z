import React from "react";
import { Link } from "react-router-dom";
import "./itemcard.component.css";

function ItemCardComponent({ product }) {
  let ratingc;
  if (product.rating > 4) ratingc = "rgb(87,227,44)";
  else if (product.rating > 3 && product.rating < 4)
    ratingc = "rgb(255,165,52)";
  else ratingc = "rgb(255,69,69)";
  if (product.rating > 4) ratingc = "rgb(87,227,44)";
  else if (product.rating > 3 && product.rating < 4)
    ratingc = "rgb(255,165,52)";
  else ratingc = "rgb(255,69,69)";
  return (
    <div className="card">
      <h4 className="text-center">{product.title}</h4>
      <h6>({product.title?.slice(0.5)})</h6>
      <img
        src={product.images[0] || "https://i.imgur.com/1twoaDy.jpeg"}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body">
        <div className="price d-flex gap-2 align-item-center">
          <div className="price-before-discount">
            <b>
              <i>
                <p>
                  <s>₹{product.price}</s>
                </p>
              </i>
            </b>
          </div>
          <h5>₹{product.price - (product.price * 10) / 100}</h5>
          <i className="offer">
            <p>{10}% off</p>
          </i>
        </div>
        <h6>
          Rating:{" "}
          <span
            className="badge bg-dark"
            style={{ color: ratingc, fontWeight: 700 }}
          >
            {product.rating}
          </span>
        </h6>
        <Link to={`/product?id=${product.id}`}>
          <button className="btn btn-link">View More</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemCardComponent;
