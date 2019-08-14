import React from "react";

const OperatorButton = props => {
  return (
    <button className={"button-ops-" + props.operatorLabel }>
      {props.operatorLabel}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;