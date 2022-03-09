import React from "react";
import * as SC from "../style";

function ActiveComponent(props) {
  const { children, onMouseMove, display, width } = props;
  return (
    <SC.ActiveComponent
      onMouseMove={onMouseMove}
      display={display}
      width={width}
    >
      {children}
    </SC.ActiveComponent>
  );
}

export default ActiveComponent;
