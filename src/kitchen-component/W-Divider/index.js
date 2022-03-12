import React from "react";
import { Divider } from "antd";
import { toJS } from "mobx";

function WDivider(props) {
  const { orientation = "left", content = "text", style } = toJS(props);
  return (
    <Divider style={style} orientation={orientation}>
      {content}
    </Divider>
  );
}

export default WDivider;
