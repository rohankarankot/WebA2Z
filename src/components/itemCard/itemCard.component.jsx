import React from "react";
import { Link } from "react-router-dom";

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
      <h6>({product.vendor})</h6>
      <img
        src={product.thumbnail}
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
          <h5>₹{product.price - (product.price * product.discount) / 100}</h5>
          <i className="offer">
            <p>{product.discount}% off</p>
          </i>
        </div>
        <h6>
          Rating:{" "}
          <span
            class="badge bg-dark"
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
