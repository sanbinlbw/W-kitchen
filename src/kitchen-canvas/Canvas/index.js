import React, { useState } from "react";
import { toJS } from "mobx";
import _ from "lodash";
import * as SC from "../style";
import { renderType } from "../../RenderPage/renderType";
import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import ActiveComponent from "../ActiveComponent";

function Canvas({ config }) {
  const { type, props, children, key = "" } = toJS(config);

  // 添加isConfig标记，判断是否是可编辑的组件
  const _props = _.cloneDeep(props);
  _props.isConfig = true;

  const enterComponent = () => {
    store.setCurrentComponent(key);
  };

  const leaveComponent = () => {
    store.setCurrentComponent("");
  };

  const moveComponent = (ev) => {
    ev.stopPropagation();
    store.setCurrentComponent(key);
  };

  const clickComponent = (ev) => {
    ev.stopPropagation();
    store.setActiveComponent(key);
    // store.setCurrentComponent("");
    console.log("act", store.activeComponent);
    console.log("com", store.currentComponent);
  };

  const moveActiveComponent = (ev) => {
    ev.stopPropagation();
    store.setCurrentComponent(key);
  };

  return store.activeComponent === key ? (
    <ActiveComponent onMouseMove={moveActiveComponent}>
      {renderType[type](_props, children)}
    </ActiveComponent>
  ) : (
    <SC.CanvasComponent
      // 判断是否hover当前组件
      isHover={store.currentComponent === key}
      onMouseLeave={leaveComponent}
      onMouseMove={moveComponent}
      onClick={clickComponent}
    >
      {renderType[type](_props, children)}
    </SC.CanvasComponent>
  );
}

export default observer(Canvas);
