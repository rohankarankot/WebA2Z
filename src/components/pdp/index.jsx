import React, { useEffect, useState } from "react";
import ImageSliderComponent from "./imageSlider.component";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../../store/features/cartSlice";
import { useDispatch } from "react-redux";

function ProductDec() {
  let [searchParams] = useSearchParams();
  const [currentProd, setcurrentProd] = useState();

  const dispatch = useDispatch()
  console.log('currentProd: ', currentProd);


  useEffect(() => {
    const productId = searchParams.get("id");

    let config = {
      method: 'get',
      url: `https://api.escuelajs.co/api/v1/products/${productId}`,

    };
    axios.request(config)
      .then((response) => {
        setcurrentProd(response.data);
      })
      .catch((error) => {
        console.error(error);
      });


    setcurrentProd();


  }, [searchParams]);

  const handleCart = (action) => {

    if (action === "add") {
      let itemTobeAdded = {
        id: currentProd.id,
        title: currentProd.title,
        qty: 1,
        price: currentProd.price,
        image: currentProd.images[0],
      }


      dispatch(addProduct(itemTobeAdded))



    } else {
      alert("hey you clicked minus")

    }
  };




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
                  (currentProd?.price * 20) / 100}
              </h5>
              <s className="text-danger">₹{currentProd?.price}</s>
              <p className="text-warning">{currentProd?.discount}% off</p>
            </div>
            <h3>{currentProd?.description?.slice(0, 50)}...</h3>
            <h6>
              Rating:{" "}
              <span className="badge bg-dark">{currentProd?.rating}</span>
            </h6>
            <hr />
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleCart("remove")}
              >
                <i class="fa-solid fa-minus" style={{ fontSize: "20px", }}></i>
              </button>
              <button type="button" className="btn btn-primary-outlined">
                Add
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleCart("add")}
              >
                <i class="fa-solid fa-plus" style={{ fontSize: "20px", }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ProductDec;
