import React, { useState, useEffect } from "react";
import { toJS } from "mobx";
import _ from "lodash";
import * as SC from "../style";
import { renderType } from "../../RenderPage/renderType";
import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import ActiveComponent from "../ActiveComponent";

const insideMap = ["W-Divider"];

function Canvas({ config }) {
  const { type, props, children, id, fId = "" } = toJS(config);

  useEffect(() => {
    if (!("schemaMap" in store)) {
      store.addItem("schemaMap", {
        root: store.schema,
      });
    }
  }, []);

  // 添加isConfig标记，判断是否是可编辑的组件
  const _props = _.cloneDeep(props);
  _props.isConfig = true;

  const leaveComponent = () => {
    // 离开时hover一定为他的父组件，若为兄弟组件则会再次出发mouseenter事件
    store.setCurrentComponent(fId);
  };

  const enterComponent = () => {
    store.setCurrentComponent(id);
  };

  const clickComponent = (ev) => {
    ev.stopPropagation();
    store.setActiveComponent(id);
    // store.setProps(id)
  };

  return store.activeComponent === id ? (
    <ActiveComponent
      leaveComponent={leaveComponent}
      enterComponent={enterComponent}
      display={props.style.display}
      insideMap={insideMap}
    >
      {renderType[type](_props, children, id)}
    </ActiveComponent>
  ) : (
    <SC.CanvasComponent
      // 判断是否hover当前组件
      isHover={store.currentComponent === id}
      onMouseLeave={leaveComponent}
      onMouseEnter={enterComponent}
      onClick={clickComponent}
      display={props.style.display}
      isInside={insideMap.includes(type)}
    >
      {renderType[type](_props, children, id)}
    </SC.CanvasComponent>
  );
}

export default observer(Canvas);
