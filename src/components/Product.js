import React from "react";
import Quantity from "./Quantity";

function Product(props) {
  const handleIncrementQuantity = () =>
    props.onIncrementQuantity(props.item.id);
  const handleDecrementQuantity = () => {
    props.onDecrementQuantity(props.item.id);
  };
  return (
    <span>
      {props.item.name} - ${props.item.price} -
      <Quantity
        item={props.item}
        onIncrementQuantity={handleIncrementQuantity}
        onDecrementQuantity={handleDecrementQuantity}
      />
    </span>
  );
}

export default Product;
