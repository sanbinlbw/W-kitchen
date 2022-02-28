import React from "react";
import { renderType } from "./renderType";
import { toJS } from "mobx";

function RenderPage({ config }) {
  const { type, props, children } = toJS(config);
  return renderType[type](props, children);
}

export default RenderPage;
