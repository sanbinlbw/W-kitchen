import React, { useState, useEffect } from "react";
import { Divider, Space, Radio, Slider, Input } from "antd";
import { ChromePicker } from "react-color";

import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import * as SC from "../common/style";

function DividerConfig(props) {
  const { config, setConfig } = props;
  const [isColor, setIsColor] = useState(false);
  const updateComponent = (newConfig) => {
    setConfig({
      ...config,
      ...newConfig,
    });
  };

  const changeTop = (value) => {
    updateComponent({ marginTop: value });
  };

  const changeBottom = (value) => {
    updateComponent({ marginBottom: value });
  };

  const changeContent = (el) => {
    updateComponent({ content: el.target.value });
  };

  const changeFontColor = (color) => {
    updateComponent({ color: color.hex });
  };

  const changeFontPosition = ({ target: { value } }) => {
    updateComponent({ orientation: value });
  };

  const baseRender = () => {
    return (
      <div>
        <Divider orientation="left">基本布局</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>文字位置:</SC.Title>
            <Radio.Group
              onChange={changeFontPosition}
              value={config.orientation}
            >
              <Radio.Button value="left">居左</Radio.Button>
              <Radio.Button value="center">居中</Radio.Button>
              <Radio.Button value="right">居右</Radio.Button>
            </Radio.Group>
          </SC.Item>
          <SC.Item>
            <SC.Title>上边距:</SC.Title>
            <Slider value={config.marginTop} onChange={changeTop} />
          </SC.Item>
          <SC.Item>
            <SC.Title>下边距:</SC.Title>
            <Slider value={config.marginBottom} onChange={changeBottom} />
          </SC.Item>
        </SC.Content>
        <Divider orientation="left">基本功能</Divider>
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
        </SC.Content>
      </div>
    );
  };

  // 配置更新后，更新mobx里的组件与配置
  useEffect(() => {
    const component = store.componentList.find(
      (item) => item.name === config.type
    ).component;
    store.setComponent(component(config));
    store.setConfig(config);
  }, [config]);

  return <div>{baseRender()}</div>;
}

export default observer(DividerConfig);
