import React, { useEffect } from "react";
import * as SC from "./style";
import { store } from "../mobx";
import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";
import Canvas from "./Canvas";
import { CloseOutlined } from "@ant-design/icons";

function KitchenCanvas() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "component",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop(item, monitor) {},
  }));
  return (
    <SC.Canvas ref={drop}>
      {store.schema.children.length > 0 ? (
        <Canvas config={store.schema} />
      ) : (
        !isOver && <SC.CanvasTips>编辑区域</SC.CanvasTips>
      )}
      {/* {isOver ? (
        <SC.DropTips>组件放置处</SC.DropTips>
      ) : (
        <div style={{ height: "65px" }}></div>
      )} */}
    </SC.Canvas>
  );
}

export default observer(KitchenCanvas);
