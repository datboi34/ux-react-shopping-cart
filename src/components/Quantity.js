import React from "react";

function Quantity(props) {
  return (
    <span>
      <button onClick={props.onDecrementQuantity}>-</button>

      {props.item.quantity}
      <button onClick={props.onIncrementQuantity}>+</button>
    </span>
  );
}

export default Quantity;
