import React, { useState, useEffect } from "react";
import { Divider, Space, Radio, Slider, Input } from "antd";
import { ChromePicker } from "react-color";

import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import * as SC from "../common/style";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function ContainerConfig() {
  const [isColor, setIsColor] = useState(false);
  const { props } = store.schemaMap[store.activeComponent];

  const dataFilter = (value) => {
    return props.style[value].substring(0, props.style[value].length - 2);
  };
  const changeWidth = ({ target: { value } }) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, width: value },
    });
  };

  const changeHeight = ({ target: { value } }) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, height: value },
    });
  };

  const changeRadius = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, borderRadius: `${value}px` },
    });
  };

  const changeBackgroundColor = (color) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, backgroundColor: color.hex },
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

  const changeLeft = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, marginLeft: `${value}px` },
    });
  };

  const changeRight = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, marginRight: `${value}px` },
    });
  };

  const changePaddingLeft = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, paddingLeft: `${value}px` },
    });
  };

  const changePaddingRight = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, paddingRight: `${value}px` },
    });
  };

  const changePaddingTop = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, paddingTop: `${value}px` },
    });
  };

  const changePaddingBottom = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, paddingBottom: `${value}px` },
    });
  };

  const changeJustify = ({ target: { value } }) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, justifyContent: value },
    });
  };

  const changeAlign = ({ target: { value } }) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, alignItems: value },
    });
  };

  const changeFlexDirection = ({ target: { value } }) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, flexDirection: value },
    });
  };
  const baseRender = () => {
    return (
      <div
        style={{ height: "63vh", overflowY: "auto" }}
        onClick={() => setIsColor(false)}
      >
        <Collapse
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          ghost
          className="site-collapse-custom-collapse"
        >
          {/* 根结点不展示大小控制 */}
          {store.activeComponent !== "root" && (
            <Panel
              header="组件外观"
              key="1"
              className="site-collapse-custom-panel"
            >
              <SC.Content>
                <SC.Item>
                  <SC.Title>宽度:</SC.Title>
                  <Input
                    value={props.style.width}
                    onChange={changeWidth}
                    style={{ width: "100px" }}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>高度:</SC.Title>
                  <Input
                    value={props.style.height}
                    onChange={changeHeight}
                    style={{ width: "100px" }}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>椭圆度:</SC.Title>
                  <Slider
                    max={500}
                    value={dataFilter("borderRadius")}
                    onChange={changeRadius}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>背景颜色:</SC.Title>
                  <SC.Color
                    color={props.style.backgroundColor}
                    onClick={(ev) => {
                      ev.stopPropagation();
                      setIsColor(true);
                    }}
                  />
                  {isColor && (
                    <div
                      style={{ position: "absolute", zIndex: 1 }}
                      onClick={(ev) => ev.stopPropagation()}
                    >
                      <ChromePicker
                        color={props.style.backgroundColor}
                        onChange={changeBackgroundColor}
                      />
                    </div>
                  )}
                </SC.Item>
              </SC.Content>
            </Panel>
          )}
          {store.activeComponent !== "root" && (
            <Panel
              header="外边距"
              key="2"
              className="site-collapse-custom-panel"
            >
              <SC.Content>
                <SC.Item>
                  <SC.Title>上边距:</SC.Title>
                  <Slider
                    max={500}
                    value={dataFilter("marginTop")}
                    onChange={changeTop}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>下边距:</SC.Title>
                  <Slider
                    max={500}
                    value={dataFilter("marginBottom")}
                    onChange={changeBottom}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>左边距:</SC.Title>
                  <Slider
                    max={40}
                    value={dataFilter("marginLeft")}
                    onChange={changeLeft}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>右边距:</SC.Title>
                  <Slider
                    max={40}
                    value={dataFilter("marginRight")}
                    onChange={changeRight}
                  />
                </SC.Item>
              </SC.Content>
            </Panel>
          )}
          <Panel header="内边距" key="3" className="site-collapse-custom-panel">
            <SC.Content>
              <SC.Item>
                <SC.Title>上内距:</SC.Title>
                <Slider
                  max={500}
                  value={dataFilter("paddingTop")}
                  onChange={changePaddingTop}
                />
              </SC.Item>
              <SC.Item>
                <SC.Title>下内距:</SC.Title>
                <Slider
                  max={500}
                  value={dataFilter("paddingBottom")}
                  onChange={changePaddingBottom}
                />
              </SC.Item>
              <SC.Item>
                <SC.Title>左内距:</SC.Title>
                <Slider
                  max={40}
                  value={dataFilter("paddingLeft")}
                  onChange={changePaddingLeft}
                />
              </SC.Item>
              <SC.Item>
                <SC.Title>右内距:</SC.Title>
                <Slider
                  max={40}
                  value={dataFilter("paddingRight")}
                  onChange={changePaddingRight}
                />
              </SC.Item>
            </SC.Content>
          </Panel>
          <Panel
            header="基本布局"
            key="4"
            className="site-collapse-custom-panel"
          >
            <SC.Content>
              <SC.Item>
                <SC.Title>方向:</SC.Title>
                <Radio.Group
                  onChange={changeFlexDirection}
                  value={props.style.flexDirection}
                >
                  <Radio.Button value="column">纵轴</Radio.Button>
                  <Radio.Button value="row">横轴</Radio.Button>
                </Radio.Group>
              </SC.Item>
              {store.activeComponent !== "root" && (
                <SC.Item>
                  <SC.Title>主轴:</SC.Title>
                  <Radio.Group
                    onChange={changeJustify}
                    value={props.style.justifyContent}
                  >
                    <Radio.Button value="flex-start">居前</Radio.Button>
                    <Radio.Button value="center">居中</Radio.Button>
                    <Radio.Button value="flex-end">居后</Radio.Button>
                  </Radio.Group>
                </SC.Item>
              )}
              {store.activeComponent !== "root" && (
                <SC.Item>
                  <SC.Title>纵轴:</SC.Title>
                  <Radio.Group
                    onChange={changeAlign}
                    value={props.style.alignItems}
                  >
                    <Radio.Button value="flex-start">居前</Radio.Button>
                    <Radio.Button value="center">居中</Radio.Button>
                    <Radio.Button value="flex-end">居后</Radio.Button>
                  </Radio.Group>
                </SC.Item>
              )}
            </SC.Content>
          </Panel>
        </Collapse>
      </div>
    );
  };

  return <div>{baseRender()}</div>;
}

export default observer(ContainerConfig);
