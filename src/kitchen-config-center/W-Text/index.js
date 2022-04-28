import React, { useState, useEffect } from "react";
import { Divider, Switch, Radio, Slider, Input } from "antd";
import { ChromePicker } from "react-color";

import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import * as SC from "../common/style";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { TextArea } = Input;

function TextConfig() {
  const [isColor, setIsColor] = useState(false);
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

  const changeFontSize = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, fontSize: `${value}px` },
    });
  };

  const changeColor = (color) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, color: color.hex },
    });
  };

  const changeFontWeight = (value) => {
    store.setProps(store.activeComponent, {
      ...props,
      style: { ...props.style, fontWeight: value * 100 },
    });
  };

  const changeContent = (el) => {
    store.setProps(store.activeComponent, {
      ...props,
      content: el.target.value,
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

  const baseRender = () => {
    return (
      <div
        style={{ height: '63vh', overflowY: 'auto' }}
        onClick={() => setIsColor(false)}
      >
        <Collapse
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          ghost
          className="site-collapse-custom-collapse"
        >
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
                <SC.Title>字体大小:</SC.Title>
                <Slider
                  min={12}
                  max={50}
                  value={dataFilter('fontSize') / 10}
                  onChange={changeFontSize}
                />
              </SC.Item>
              <SC.Item>
                <SC.Title>字体粗细:</SC.Title>
                <Slider
                  min={1}
                  max={9}
                  value={props.style.fontWeight / 100}
                  onChange={changeFontWeight}
                />
              </SC.Item>
              <SC.Item>
                <SC.Title>字体颜色:</SC.Title>
                <SC.Color
                  color={props.style.color}
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
                      color={props.style.color}
                      onChange={changeColor}
                    />
                  </div>
                )}
              </SC.Item>
              <SC.Item>
                <SC.Title>内容:</SC.Title>
                <TextArea
                  showCount
                  maxLength={1000}
                  value={props.content}
                  onChange={changeContent}
                />
              </SC.Item>
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
          <Panel header="外边距" key="2" className="site-collapse-custom-panel">
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
        </Collapse>
      </div>
    );
  };

  return <div>{baseRender()}</div>;
}

export default observer(TextConfig);
