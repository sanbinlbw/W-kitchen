import React from "react";
import * as SC from "../style";

function ActiveComponent(props) {
  const { children, onMouseMove } = props;
  console.log(props);
  return (
    <SC.ActiveComponent onMouseMove={onMouseMove}>
      {children}
    </SC.ActiveComponent>
  );
}

export default ActiveComponent;
