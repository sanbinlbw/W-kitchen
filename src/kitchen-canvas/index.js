import React, { useEffect } from "react";
import * as SC from "./style";
import { store } from "../mobx";
import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";
import { CloseOutlined } from "@ant-design/icons";

function KitchenCanvas() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "component",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop(item, monitor) {
      const { id } = item;
      const { component, config } = store.componentList[id];
      store.addList(component());
      store.addConfig(config);
    },
  }));

  return (
    <SC.Canvas ref={drop}>
      {store.pageComponent.length
        ? store.pageComponent.map((item, index) => {
            return store.currentId !== index ? (
              <SC.CanvasComponent
                key={index}
                onClick={() => store.setId(index)}
              >
                {item}
              </SC.CanvasComponent>
            ) : (
              <SC.ActiveComponent
                key={index}
                onClick={() => store.setId(index)}
              >
                {item}
              </SC.ActiveComponent>
            );
          })
        : !isOver && <SC.CanvasTips>编辑区域</SC.CanvasTips>}
      {isOver ? (
        <SC.DropTips>组件放置处</SC.DropTips>
      ) : (
        <div style={{ height: "65px" }}></div>
      )}
    </SC.Canvas>
  );
}

export default observer(KitchenCanvas);
