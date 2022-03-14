import React from "react";
import { Divider } from "antd";
import { toJS } from "mobx";

function WDivider(props) {
  const { orientation = "left", content = "text", style } = toJS(props);
  return content ? (
    <Divider style={style} orientation={orientation}>
      {content}
    </Divider>
  ) : (
    <Divider />
  );
}

export default WDivider;
