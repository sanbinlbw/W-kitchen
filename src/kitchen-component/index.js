import React from "react";
import * as SC from "./style";
import { store } from "../mobx";
import { observer } from "mobx-react-lite";
import { useDrag } from "react-dnd";

function ItemRender(item, index) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "component",
    item: { id: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <SC.Item key={index} ref={drag} isDragging={isDragging}>
      {item.icon}
      <div style={{ marginTop: "5px", fontSize: "16px" }}>{item.title}</div>
    </SC.Item>
  );
}

function KitchenComponent() {
  return (
    <SC.Component>
      {store.componentList.map((item, index) => {
        return ItemRender(item, index);
      })}
    </SC.Component>
  );
}

export default observer(KitchenComponent);
