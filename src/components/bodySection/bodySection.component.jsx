import React from "react";
import ItemCardComponent from "../itemCard/itemCard.component";

function BodySectionComponent({ allProducts }) {
  return (
    <div>
      {allProducts.products !== undefined &&
        allProducts?.products.map((product, i) => {
          return <ItemCardComponent product={product} />;
        })}
    </div>
  );
}

export default BodySectionComponent;
