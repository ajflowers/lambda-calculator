import React from "react";

const NumberButton = props => {
  function widenZero(digit) {
    if (digit === "0") {
      return "240px";
    } else {
      return "100px";
    }
  }
  return (
    <button classname={"button-num-" + props.numberValue} style={{width: widenZero(props.numberValue)}}>
      {props.numberValue}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;