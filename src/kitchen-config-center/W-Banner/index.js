import React, { useState, useEffect } from "react";
import { Divider, Radio, Switch, Slider } from "antd";
import { reaction } from "mobx";

import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import * as SC from "./style";

function BannerConfig() {
  const [config, setConfig] = useState(store.pageConfig[store.currentId]);
  const updateComponent = (newConfig) => {
    setConfig({
      ...config,
      ...newConfig,
    });
  };

  const handleValue = ({ target: { value } }) => {
    updateComponent({ dotPosition: value });
  };

  const changeAuto = (checked) => {
    updateComponent({ auto: checked });
  };

  const changeTop = (value) => {
    updateComponent({ marginTop: value });
  };

  const changeBottom = (value) => {
    updateComponent({ marginBottom: value });
  };

  const baseRender = () => {
    return (
      <div>
        <Divider orientation="left">基本布局</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>按钮方向:</SC.Title>
            <Radio.Group onChange={handleValue} value={config.dotPosition}>
              <Radio.Button value="top">上</Radio.Button>
              <Radio.Button value="bottom">下</Radio.Button>
              <Radio.Button value="left">左</Radio.Button>
              <Radio.Button value="right">右</Radio.Button>
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
            <SC.Title>自动播放:</SC.Title>
            <Switch defaultChecked={config.auto} onChange={changeAuto} />
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

  // 更换成其他组件时，读取新的配置
  useEffect(() => {
    reaction(
      () => store.currentId,
      (currentId) => {
        setConfig(store.pageConfig[currentId]);
        console.log(store.pageConfig[currentId]);
      }
    );
  }, []);

  return <div>{baseRender()}</div>;
}

export default observer(BannerConfig);
