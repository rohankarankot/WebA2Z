import React from "react";
import "./bodySection.component.css";
import ItemCardComponent from "../itemCard/itemCard.component";

const BodySectionComponent = ({ allProducts }) => {
  return (
    <div className="wrapper">
      {allProducts.products !== undefined &&
        allProducts?.products.map((product) => {
          return <ItemCardComponent product={product} key={product.id} />;
        })}
    </div>
  );
};

export default BodySectionComponent;
