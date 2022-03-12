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
    bottomLeft: true,
    bottomRight: true,
    left: false,
    right: true,
    top: false,
    topLeft: false,
    topRight: false,
  },
  "W-Text": {
    bottom: false,
    bottomLeft: false,
    bottomRight: false,
    left: false,
    right: true,
    top: false,
    topLeft: false,
    topRight: false,
  },
};

function ActiveComponent(props) {
  const { children, leaveComponent, enterComponent, display } = props;
  const { props: _props } = store.schemaMap[store.activeComponent];

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
  return (
    <SC.ActiveComponent
      onMouseLeave={leaveComponent}
      onMouseEnter={enterComponent}
      display={display}
      onClick={(ev) => ev.stopPropagation()}
    >
      <Rnd
        style={{
          position: "static",
          cursor: "default",
          border: "1px dashed #155bd4",
        }}
        size={{
          width: `${
            parseInt(
              _props.style.width.substring(0, _props.style.width.length - 2)
            ) + 2
          }px`,
          height:
            _props.style.height &&
            `${
              parseInt(
                _props.style.height.substring(0, _props.style.height.length - 2)
              ) + 2
            }px`,
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
