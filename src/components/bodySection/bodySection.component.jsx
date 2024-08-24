import React from "react";
import "./bodySection.component.css";
import ItemCardComponent from "../itemCard/itemCard.component";

const BodySectionComponent = ({ allProducts }) => {
  return (
    <div className="wrapper">
      {allProducts !== undefined &&
        allProducts?.slice(3, 23).map((product, i) => {
          return <ItemCardComponent product={product} />;
        })}
    </div>
  );
};

export default BodySectionComponent;
