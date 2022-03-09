import React, { useState, useEffect } from "react";
import { Divider, Space, Radio, Slider, Input } from "antd";
import { ChromePicker } from "react-color";

import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import * as SC from "../common/style";

function ContainerConfig() {
  // const [isColor, setIsColor] = useState(false);
  const { props } = store.schemaMap[store.activeComponent];

  const dataFilter = (value) => {
    return props.style[value].substring(0, props.style[value].length - 2);
  };
  const changeWidth = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, width: `${value}vw` },
    });
  };

  const changeHeight = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, height: `${value}px` },
    });
  };

  const changeTop = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, marginTop: `${value}px` },
    });
  };

  const changeBottom = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, marginBottom: `${value}px` },
    });
  };
  const baseRender = () => {
    return (
      <div style={{ height: "63vh", overflowY: "auto" }}>
        <Divider orientation="left">基本布局</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>宽度:</SC.Title>
            <Slider
              max={63}
              value={dataFilter("width")}
              onChange={changeWidth}
            />
          </SC.Item>
          <SC.Item>
            <SC.Title>高度:</SC.Title>
            <Slider
              max={1000}
              value={dataFilter("height")}
              onChange={changeHeight}
            />
          </SC.Item>
          <SC.Item>
            <SC.Title>上边距:</SC.Title>
            <Slider value={dataFilter("marginTop")} onChange={changeTop} />
          </SC.Item>
          <SC.Item>
            <SC.Title>下边距:</SC.Title>
            <Slider
              value={dataFilter("marginBottom")}
              onChange={changeBottom}
            />
          </SC.Item>
        </SC.Content>
        {/* <Divider orientation="left">基本功能</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>内容:</SC.Title>
            <Input
              placeholder={config.content}
              onChange={changeContent}
              style={{ width: "75%" }}
            />
          </SC.Item>
          <SC.Item>
            <SC.Title>字体颜色:</SC.Title>
            <SC.Color
              color={config.color}
              onClick={() => setIsColor(!isColor)}
            />
            {isColor && (
              <div style={{ position: "absolute", zIndex: 1 }}>
                <ChromePicker color={config.color} onChange={changeFontColor} />
              </div>
            )}
          </SC.Item>
        </SC.Content> */}
      </div>
    );
  };

  return <div>{baseRender()}</div>;
}

export default observer(ContainerConfig);
