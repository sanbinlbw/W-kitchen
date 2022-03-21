import React, { useState, useEffect } from "react";
import { Divider, Space, Radio, Slider, Input } from "antd";
import { ChromePicker } from "react-color";

import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import * as SC from "../common/style";

function DividerConfig() {
  const { props } = store.schemaMap[store.activeComponent];
  const [isColor, setIsColor] = useState(false);

  const dataFilter = (value) => {
    return props.style[value].substring(0, props.style[value].length - 2) * 10;
  };

  const changeFontPosition = ({ target: { value } }) => {
    store.setProps(store.activeComponent, {
      ...props,
      orientation: value,
    });
  };

  const changeTop = (value) => {
    value = parseFloat(value) / 10;

    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, marginTop: `${value}vh` },
    });
  };

  const changeBottom = (value) => {
    value = parseFloat(value) / 10;

    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, marginBottom: `${value}vh` },
    });
  };

  const changeContent = ({ target: { value } }) => {
    store.setProps(store.activeComponent, {
      ...props,
      content: value,
    });
  };

  const changeFontColor = (color) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, color: color.hex },
    });
  };

  const baseRender = () => {
    return (
      <div
        style={{ height: "63vh", overflowY: "auto" }}
        onClick={() => setIsColor(false)}
      >
        <Divider orientation="left">基本布局</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>文字位置:</SC.Title>
            <Radio.Group
              onChange={changeFontPosition}
              value={props.orientation}
            >
              <Radio.Button value="left">居左</Radio.Button>
              <Radio.Button value="center">居中</Radio.Button>
              <Radio.Button value="right">居右</Radio.Button>
            </Radio.Group>
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
        <Divider orientation="left">基本功能</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>内容:</SC.Title>
            <Input
              value={props.content}
              onChange={changeContent}
              style={{ width: "75%" }}
            />
          </SC.Item>
          <SC.Item>
            <SC.Title>字体颜色:</SC.Title>
            <SC.Color
              color={props.style.color}
              onClick={(ev) => {
                ev.stopPropagation();
                setIsColor(true);
              }}
            />
            {isColor && (
              <div
                style={{ position: "absolute", zIndex: 2 }}
                onClick={(ev) => ev.stopPropagation()}
              >
                <ChromePicker
                  color={props.style.color}
                  onChange={changeFontColor}
                />
              </div>
            )}
          </SC.Item>
        </SC.Content>
      </div>
    );
  };

  return <div>{baseRender()}</div>;
}

export default observer(DividerConfig);
