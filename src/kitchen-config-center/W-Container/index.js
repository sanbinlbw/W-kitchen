import React, { useState, useEffect } from "react";
import { Divider, Switch, Radio, Slider, Input } from "antd";
import { ChromePicker } from "react-color";

import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import * as SC from "../common/style";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function ContainerConfig() {
  const [isColor, setIsColor] = useState(false);
  const [isBorderColor, setBorderColor] = useState(false);
  const { props } = store.schemaMap[store.activeComponent];

  const dataFilter = (value) => {
    return props.style[value].substring(0, props.style[value].length - 2) * 10;
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

  const changeBorderWidth = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, borderWidth: `${value}px` },
    });
  };

  const changeBorderColor = (color) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, borderColor: color.hex },
    });
  };

  const setCanHref = (checked) => {
    store.setProps(store.activeComponent, {
      ...props,
      canHref: checked,
    });
  };

  const changeHrefUrl = ({ target: { value } }) => {
    store.setProps(store.activeComponent, {
      ...props,
      hrefUrl: value,
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

  const changeLeft = (value) => {
    value = parseFloat(value) / 10;
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, marginLeft: `${value}vw` },
    });
  };

  const changeRight = (value) => {
    value = parseFloat(value) / 10;
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, marginRight: `${value}vw` },
    });
  };

  const changePaddingLeft = (value) => {
    value = parseFloat(value) / 10;
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, paddingLeft: `${value}vw` },
    });
  };

  const changePaddingRight = (value) => {
    value = parseFloat(value) / 10;
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, paddingRight: `${value}vw` },
    });
  };

  const changePaddingTop = (value) => {
    value = parseFloat(value) / 10;
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, paddingTop: `${value}vh` },
    });
  };

  const changePaddingBottom = (value) => {
    value = parseFloat(value) / 10;
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, paddingBottom: `${value}vh` },
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
        style={{ height: '63vh', overflowY: 'auto' }}
        onClick={() => {
          setIsColor(false);
          setBorderColor(false);
        }}
      >
        <Collapse
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          ghost
          className="site-collapse-custom-collapse"
        >
          {/* 根结点不展示大小控制 */}
          {store.activeComponent !== 'root' && (
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
                    style={{ width: '200px' }}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>高度:</SC.Title>
                  <Input
                    value={props.style.height}
                    onChange={changeHeight}
                    style={{ width: '200px' }}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>椭圆度:</SC.Title>
                  <Slider
                    max={500}
                    value={dataFilter('borderRadius') / 10}
                    onChange={changeRadius}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>背景颜色:</SC.Title>
                  <SC.Color
                    color={props.style.backgroundColor}
                    onClick={ev => {
                      ev.stopPropagation();
                      setIsColor(true);
                    }}
                  />
                  {isColor && (
                    <div
                      style={{ position: 'absolute', zIndex: 2 }}
                      onClick={ev => ev.stopPropagation()}
                    >
                      <ChromePicker
                        color={props.style.backgroundColor}
                        onChange={changeBackgroundColor}
                      />
                    </div>
                  )}
                </SC.Item>
                {store.activeComponent !== 'root' && (
                  <SC.Item>
                    <SC.Title>边框大小:</SC.Title>
                    <Slider
                      max={10}
                      value={dataFilter('borderWidth') / 10}
                      onChange={changeBorderWidth}
                    />
                  </SC.Item>
                )}
                {store.activeComponent !== 'root' && (
                  <SC.Item>
                    <SC.Title>边框颜色:</SC.Title>
                    <SC.Color
                      color={props.style.borderColor}
                      onClick={ev => {
                        ev.stopPropagation();
                        setBorderColor(true);
                      }}
                    />
                    {isBorderColor && (
                      <div
                        style={{ position: 'absolute', zIndex: 2 }}
                        onClick={ev => ev.stopPropagation()}
                      >
                        <ChromePicker
                          color={props.style.borderColor}
                          onChange={changeBorderColor}
                        />
                      </div>
                    )}
                  </SC.Item>
                )}
                <SC.Item>
                  <SC.Title>是否跳转:</SC.Title>
                  <Switch onChange={setCanHref} checked={props.canHref} />
                </SC.Item>
                {props.canHref && (
                  <SC.Item>
                    <SC.Title>跳转链接:</SC.Title>
                    <Input value={props.hrefUrl} onChange={changeHrefUrl} />
                  </SC.Item>
                )}
              </SC.Content>
            </Panel>
          )}
          {store.activeComponent !== 'root' && (
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
                    value={dataFilter('marginTop')}
                    onChange={changeTop}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>下边距:</SC.Title>
                  <Slider
                    max={500}
                    value={dataFilter('marginBottom')}
                    onChange={changeBottom}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>左边距:</SC.Title>
                  <Slider
                    max={500}
                    value={dataFilter('marginLeft')}
                    onChange={changeLeft}
                  />
                </SC.Item>
                <SC.Item>
                  <SC.Title>右边距:</SC.Title>
                  <Slider
                    max={500}
                    value={dataFilter('marginRight')}
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
                  value={dataFilter('paddingTop')}
                  onChange={changePaddingTop}
                />
              </SC.Item>
              <SC.Item>
                <SC.Title>下内距:</SC.Title>
                <Slider
                  max={500}
                  value={dataFilter('paddingBottom')}
                  onChange={changePaddingBottom}
                />
              </SC.Item>
              <SC.Item>
                <SC.Title>左内距:</SC.Title>
                <Slider
                  max={500}
                  value={dataFilter('paddingLeft')}
                  onChange={changePaddingLeft}
                />
              </SC.Item>
              <SC.Item>
                <SC.Title>右内距:</SC.Title>
                <Slider
                  max={500}
                  value={dataFilter('paddingRight')}
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
              {store.activeComponent !== 'root' && (
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
              {store.activeComponent !== 'root' && (
                <SC.Item>
                  <SC.Title>副轴:</SC.Title>
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
