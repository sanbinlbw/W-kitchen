import React from "react";
import * as SC from "../style";
import { renderType } from "../../RenderPage/renderType";

function Canvas({ config }) {
  const { type, props, children } = config;
  // const sonRender = children.map((item, index) => {
  //   return <Canvas config={item.config}/>
  // })
  return <SC.CanvasComponent>{renderType[type](props)}</SC.CanvasComponent>;
}

export default Canvas;
