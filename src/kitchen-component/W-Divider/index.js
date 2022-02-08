import React from "react";
import { Divider } from "antd";
import { toJS } from "mobx";

function WDivider(props) {
  const {
    orientation = "left",
    marginTop = 0,
    marginBottom = 0,
    content = "text",
    color = "#000",
  } = toJS(props);
  return (
    <Divider
      style={{ marginTop, marginBottom, color }}
      orientation={orientation}
    >
      {content}
    </Divider>
  );
}

export default WDivider;
