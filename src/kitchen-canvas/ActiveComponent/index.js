import React, { useState } from "react";
import * as SC from "../style";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { store } from "../../mobx";
import { Rnd } from "react-rnd";

// 控制可拖拽的方向
const resizeMap = {
  'W-Container': {
    bottom: true,
    bottomLeft: false,
    bottomRight: true,
    left: false,
    right: true,
    top: false,
    topLeft: false,
    topRight: false,
  },
  'W-Divider': false,
  'W-Text': {
    bottom: false,
    bottomLeft: false,
    bottomRight: false,
    left: false,
    right: true,
    top: false,
    topLeft: false,
    topRight: false,
  },
  'W-Image': {
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
    console.log(store.schema);
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
    // 计算后的自适应宽度
    const _width =
      (parseInt(width.substring(0, width.length - 2)) / store.screenWidth) * 88;
    const _height =
      height &&
      (parseInt(height.substring(0, height.length - 2)) / store.screenHeight) *
        88;
    if (width && height) {
      const _marginLeft = parseInt(
        store.schemaMap[store.activeComponent].props.style.marginLeft.substring(
          0,
          store.schemaMap[store.activeComponent].props.style.marginLeft.length -
            2
        )
      );
      const _marginRight = parseInt(
        store.schemaMap[
          store.activeComponent
        ].props.style.marginRight.substring(
          0,
          store.schemaMap[store.activeComponent].props.style.marginRight
            .length - 2
        )
      );
      const _marginTop = parseInt(
        store.schemaMap[store.activeComponent].props.style.marginTop.substring(
          0,
          store.schemaMap[store.activeComponent].props.style.marginTop.length -
            2
        )
      );
      const _marginBottom = parseInt(
        store.schemaMap[
          store.activeComponent
        ].props.style.marginBottom.substring(
          0,
          store.schemaMap[store.activeComponent].props.style.marginBottom
            .length - 2
        )
      );
      store.setProps(store.activeComponent, {
        ..._props,
        style: {
          ..._props.style,
          width: `${_width - _marginLeft - _marginRight}vw`,
          height: `${_height - _marginTop - _marginBottom}vh`,
        },
      });
    } else {
      const _marginLeft = parseInt(
        store.schemaMap[store.activeComponent].props.style.marginLeft.substring(
          0,
          store.schemaMap[store.activeComponent].props.style.marginLeft.length -
            2
        )
      );
      const _marginRight = parseInt(
        store.schemaMap[store.activeComponent].props.style.marginLeft.substring(
          0,
          store.schemaMap[store.activeComponent].props.style.marginRight
            .length - 2
        )
      );
      store.setProps(store.activeComponent, {
        ..._props,
        style: {
          ..._props.style,
          width: `${_width - _marginLeft - _marginRight}vw`,
        },
      });
    }
  };

  const widthFilter = (value) => {
    if (!_props.style[value]) return '';
    // 将vw换算为px
    const data =
      (parseFloat(
        _props.style[value].substring(0, _props.style[value].length - 2)
      ) /
        88) *
      store.screenWidth;
    return data;
  };

  const heightFilter = (value) => {
    if (!_props.style[value]) return '';
    // 将vw换算为px
    const data =
      (parseFloat(
        _props.style[value].substring(0, _props.style[value].length - 2)
      ) /
        88) *
      store.screenHeight;
    return data;
  };

  // 计算长宽
  const computeData = (data, key) => {
    if (insideMap.includes(type)) {
      return data;
    } else if (_props.style[key]) {
      if (key === 'width') {
        return `${
          widthFilter(key) +
          2 +
          widthFilter('marginLeft') +
          widthFilter('marginRight')
        }px`;
      } else if (key === 'height') {
        return `${
          heightFilter(key) +
          2 +
          heightFilter('marginTop') +
          heightFilter('marginBottom')
        }px`;
      }
    } else {
      return '';
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
          position: 'static',
          cursor: 'default',
          border: '1px dashed #155bd4',
        }}
        size={{
          width: computeData(_props.style.width, 'width'),
          height: computeData(_props.style.height, 'height'),
        }}
        disableDragging={true}
        enableResizing={
          store.activeComponent === 'root'
            ? false
            : resizeMap[store.schemaMap[store.activeComponent].type]
        }
        // enableResizing={false}
        onResize={(e, direction, ref, delta, position) => {
          if (_props.style.height) {
            changeItem(ref.style.width, ref.style.height);
          } else {
            changeItem(ref.style.width);
          }
        }}
      >
        {children}
      </Rnd>
      {store.activeComponent !== 'root' && (
        <SC.OperatingComponent>
          <ArrowLeftOutlined style={{ cursor: 'pointer' }} onClick={prevItem} />
          <DeleteOutlined style={{ cursor: 'pointer' }} onClick={deleteItem} />
          <ArrowRightOutlined
            style={{ cursor: 'pointer' }}
            onClick={nextItem}
          />
        </SC.OperatingComponent>
      )}
    </SC.ActiveComponent>
  );
}

export default ActiveComponent;
