import React, { useState } from "react";
import * as SC from "../style";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { store } from "../../mobx";
import { Rnd } from "react-rnd";

const resizeMap = {
  "W-Container": {
    bottom: true,
    bottomLeft: false,
    bottomRight: true,
    left: false,
    right: true,
    top: false,
    topLeft: false,
    topRight: false,
  },
  "W-Divider": false,
  "W-Text": {
    bottom: true,
    bottomLeft: false,
    bottomRight: true,
    left: false,
    right: true,
    top: false,
    topLeft: false,
    topRight: false,
  },
  "W-Image": {
    bottom: true,
    bottomLeft: true,
    bottomRight: true,
    left: false,
    right: true,
    top: false,
    topLeft: false,
    topRight: false,
  },
};

function ActiveComponent(props) {
  const { children, leaveComponent, enterComponent, display, insideMap } =
    props;
  const { props: _props, type } = store.schemaMap[store.activeComponent];

  const deleteItem = (ev) => {
    ev.stopPropagation();
    store.deleteSchema();
  };

  const prevItem = (ev) => {
    ev.stopPropagation();
    store.prevSchema();
  };

  const nextItem = (ev) => {
    ev.stopPropagation();
    store.nextSchema();
  };

  // 拉长时更新组件
  const changeItem = (width, height) => {
    console.log(width, height);
    store.setProps(store.activeComponent, {
      ..._props,
      style: {
        ..._props.style,
        width,
        height,
      },
    });
  };

  const dataFilter = (value) => {
    if (!_props.style[value]) return "";
    return _props.style[value].substring(0, _props.style[value].length - 2);
  };

  // 计算长宽
  const computeData = (data, key) => {
    if (insideMap.includes(type)) {
      return data;
    } else if (_props.style[key]) {
      if (key === "width") {
        return `${
          parseInt(dataFilter(key)) +
          2 +
          parseInt(dataFilter("marginLeft")) +
          parseInt(dataFilter("marginRight"))
        }px`;
      } else if (key === "height") {
        return `${
          parseInt(dataFilter(key)) +
          2 +
          parseInt(dataFilter("marginTop")) +
          parseInt(dataFilter("marginBottom"))
        }px`;
      }
    } else {
      return "";
    }
  };
  return (
    <SC.ActiveComponent
      onMouseLeave={leaveComponent}
      onMouseEnter={enterComponent}
      display={display}
      isInside={insideMap.includes(type)}
      onClick={(ev) => ev.stopPropagation()}
    >
      <Rnd
        style={{
          position: "static",
          cursor: "default",
          border: "1px dashed #155bd4",
        }}
        size={{
          width: computeData(_props.style.width, "width"),
          height: computeData(_props.style.height, "height"),
        }}
        disableDragging={true}
        enableResizing={
          store.activeComponent === "root"
            ? false
            : resizeMap[store.schemaMap[store.activeComponent].type]
        }
        // enableResizing={false}
        onResize={(e, direction, ref, delta, position) => {
          console.log(ref);
          if (_props.style.height) {
            changeItem(ref.style.width, ref.style.height);
          } else {
            changeItem(ref.style.width);
          }
        }}
      >
        {children}
      </Rnd>
      {store.activeComponent !== "root" && (
        <SC.OperatingComponent>
          <ArrowLeftOutlined style={{ cursor: "pointer" }} onClick={prevItem} />
          <DeleteOutlined style={{ cursor: "pointer" }} onClick={deleteItem} />
          <ArrowRightOutlined
            style={{ cursor: "pointer" }}
            onClick={nextItem}
          />
        </SC.OperatingComponent>
      )}
    </SC.ActiveComponent>
  );
}

export default ActiveComponent;
