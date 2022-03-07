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
      if (!("childrenMap" in store)) {
        store.addItem("childrenMap", {
          root: store.schema.children,
        });
      }
      const _config = { ...item.item.config };
      _config.id = store.uniqueId;
      store.addChildren(id, _config);
      store.setChildren(id, _config.id);
      console.log(toJS(store.schema));
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
