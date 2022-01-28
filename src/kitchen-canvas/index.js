import React, { useEffect } from "react";
import * as SC from "./style";
import { store } from "../mobx";
import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";

function KitchenCanvas() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "component",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    // hover(item, monitor) {
    //   console.log("item", item);
    // },
    drop(item, monitor) {
      const { id } = item;
      const component = store.componentList[id].component;
      store.addList(component);
    },
  }));
  return (
    <SC.Canvas ref={drop}>
      {store.pageComponent.length
        ? store.pageComponent.map((item, index) => {
            return <SC.CanvasComponent key={index}>{item}</SC.CanvasComponent>;
          })
        : !isOver && <SC.CanvasTips>编辑区域</SC.CanvasTips>}
      {isOver && <SC.DropTips>组件放置处</SC.DropTips>}
    </SC.Canvas>
  );
}

export default observer(KitchenCanvas);
