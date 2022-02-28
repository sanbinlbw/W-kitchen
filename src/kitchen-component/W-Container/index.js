import React from "react";
import { toJS } from "mobx";
import RenderPage from "../../RenderPage";

function WContainer(props) {
  const { style = {}, children = [] } = toJS(props);
  console.log(children);
  return (
    <div style={style}>
      {children.map((item, index) => {
        return <RenderPage config={item} key={index} />;
      })}
    </div>
  );
}

export default WContainer;
