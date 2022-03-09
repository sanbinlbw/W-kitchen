import React from "react";
import { toJS } from "mobx";

function WText(props) {
  const { style = {}, content = "content" } = toJS(props);
  return <div style={style}>{content}</div>;
}

export default WText;
