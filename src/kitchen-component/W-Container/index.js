import React from "react";
import { toJS } from "mobx";
import { useDrop } from "react-dnd";
import { store } from "../../mobx";
import RenderPage from "../../RenderPage";
import Canvas from "../../kitchen-canvas/Canvas";

function WContainer(props) {
  const {
    style = {},
    children = [],
    isConfig = false,
    id = "",
    canHref,
    hrefUrl,
  } = toJS(props);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "component",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop(item, monitor) {
      if (monitor.didDrop()) return;
      const _config = { ...item.item.config };
      // 每个组件设置一个唯一id
      _config.id = new Date().getTime();
      // 组件设置父id-代表它在fId的children下
      _config.fId = id;
      store.addSchema(id, _config);
      store.setSchema(id, _config.id);
    },
  }));

  return (
    <div
      style={canHref ? { ...style, cursor: "pointer" } : style}
      ref={drop}
      onClick={() => {
        if (canHref && !isConfig) window.open(hrefUrl);
      }}
    >
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
