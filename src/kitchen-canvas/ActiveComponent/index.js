import React from "react";
import * as SC from "../style";

function ActiveComponent(props) {
  const { children, onMouseMove, display } = props;
  return (
    <SC.ActiveComponent onMouseMove={onMouseMove} display={display}>
      {children}
    </SC.ActiveComponent>
  );
}

export default ActiveComponent;
