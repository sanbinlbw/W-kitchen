import React from "react";
import { Divider } from "antd";
import { toJS } from "mobx";

function WDivider(props) {
  const {
    orientation = "left",
    content = "text",
    style = {
      marginTop: 0,
      marginBottom: 0,
      color: "#000",
    },
  } = toJS(props);
  return (
    <Divider style={style} orientation={orientation}>
      {content}
    </Divider>
  );
}

export default WDivider;
