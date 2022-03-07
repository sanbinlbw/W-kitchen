import React, { useState } from "react";
import { toJS } from "mobx";
import _ from "lodash";
import * as SC from "../style";
import { renderType } from "../../RenderPage/renderType";
import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import ActiveComponent from "../ActiveComponent";

function Canvas({ config }) {
  const { type, props, children, id } = toJS(config);

  // 添加isConfig标记，判断是否是可编辑的组件
  const _props = _.cloneDeep(props);
  _props.isConfig = true;

  const leaveComponent = () => {
    store.setCurrentComponent("");
  };

  const moveComponent = (ev) => {
    ev.stopPropagation();
    if (id === store.currentComponent) return;
    store.setCurrentComponent(id);
  };

  const clickComponent = (ev) => {
    ev.stopPropagation();
    store.setActiveComponent(id);
  };

  const moveActiveComponent = (ev) => {
    ev.stopPropagation();
  };

  return store.activeComponent === id ? (
    <ActiveComponent
      onMouseMove={moveActiveComponent}
      display={props.style.display}
    >
      {renderType[type](_props, children, id)}
    </ActiveComponent>
  ) : (
    <SC.CanvasComponent
      // 判断是否hover当前组件
      isHover={store.currentComponent === id}
      onMouseLeave={leaveComponent}
      onMouseMove={moveComponent}
      onClick={clickComponent}
      display={props.style.display}
    >
      {renderType[type](_props, children, id)}
    </SC.CanvasComponent>
  );
}

export default observer(Canvas);
