import React, { useEffect, useState } from "react";
import ImageSliderComponent from "./imageSlider.component";
import { useSearchParams } from "react-router-dom";
import data from "../../mock/feed.json";

function ProductDec() {
  let [searchParams] = useSearchParams();
  const [currentProd, setcurrentProd] = useState();

  useEffect(() => {
    const productId = searchParams.get("id");
    const currentProduct = data.data?.filter(
      (product) => product.id == productId
    );
    setcurrentProd(currentProduct[0]);
  }, [searchParams]);

  return (
    <div className="container ">
      <div className="my-4">
        <div className="row">
          <ImageSliderComponent images={currentProd?.images} />
          <div className="pdp col-md-6">
            <p style={{ fontSize: "24px" }}>{currentProd?.title}</p>
            <p className="text-center">{currentProd?.des}</p>
            <div className="d-flex gap-2">
              <h5 className="text-success">
                ₹
                {currentProd?.price -
                  (currentProd?.price * currentProd?.discount) / 100}
              </h5>
              <s className="text-danger">₹{currentProd?.price}</s>
              <p className="text-warning">{currentProd?.discount}% off</p>
            </div>
            <h6>
              Rating:{" "}
              <span className="badge bg-dark">{currentProd?.rating}</span>
            </h6>
            <hr />
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-danger">
                -
              </button>
              <button type="button" className="btn btn-primary-outlined">
                Add
              </button>
              <button type="button" className="btn btn-success">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDec;
