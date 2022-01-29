import React, { useEffect } from "react";
import * as SC from "./style";
import { store } from "../mobx";
import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";
import WBanner from "../kitchen-component/W-Banner";
import WInput from "../kitchen-component/W-Input";

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
      let { component, config } = store.componentList[id];
      console.log(store.pageComponent.length);
      new Promise((resolve) => {
        store.setId(store.pageComponent.length);
        console.log("id", store.currentId);
        resolve();
      })
        .then(() => {
          store.addConfig(config);
          console.log("config", store.pageConfig[store.currentId]);
        })
        .then(() => {
          store.addList(component);
          console.log("component", store.pageComponent[store.currentId]);
        });
    },
  }));

  const setComponent = () => {
    store.setComponent(
      <WBanner contentStyle={{ height: "160px", background: "pink" }} />,
      // <WInput />,
      0
    );
  };
  return (
    <SC.Canvas ref={drop}>
      <button onClick={setComponent}>123231</button>
      {store.pageComponent.length
        ? store.pageComponent.map((item, index) => {
            return (
              <SC.CanvasComponent key={index} onClick={store.setId(index)}>
                {item}
              </SC.CanvasComponent>
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
