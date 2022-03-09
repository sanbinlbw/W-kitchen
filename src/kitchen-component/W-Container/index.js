import React from "react";
import { toJS } from "mobx";
import { useDrop } from "react-dnd";
import { store } from "../../mobx";
import RenderPage from "../../RenderPage";
import Canvas from "../../kitchen-canvas/Canvas";
import _ from "lodash";

function WContainer(props) {
  const { style = {}, children = [], isConfig = false, id = "" } = toJS(props);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "component",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop(item, monitor) {
      if (monitor.didDrop()) return;
      const _config = { ...item.item.config };
      // 每个组件设置一个唯一id
      _config.id = store.uniqueId;
      // 组件设置父id-代表它在fId的children下
      _config.fId = id;
      store.addSchema(id, _config);
      store.setSchema(id, _config.id);
    },
  }));

  return (
    <div style={style} ref={drop}>
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
