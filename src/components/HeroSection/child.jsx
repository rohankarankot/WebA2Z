import React, { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

function Child() {
  const { value } = useContext(StoreContext);

  return <div>from context: {value} </div>;
}

export default Child;
