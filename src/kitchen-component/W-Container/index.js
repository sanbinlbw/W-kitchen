import React from "react";
import { toJS } from "mobx";
import RenderPage from "../../RenderPage";
import Canvas from "../../kitchen-canvas/Canvas";

function WContainer(props) {
  const { style = {}, children = [], isConfig = false } = toJS(props);
  return (
    <div style={style}>
      {children.map((item, index) => {
        return !isConfig ? (
          <RenderPage config={item} key={index} />
        ) : (
          <Canvas config={item} key={index} />
        );
      })}
    </div>
  );
}

export default WContainer;
