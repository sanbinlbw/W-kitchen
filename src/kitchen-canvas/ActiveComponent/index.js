import React from "react";
import * as SC from "../style";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { store } from "../../mobx";

function ActiveComponent(props) {
  const { children, onMouseMove, display } = props;
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
  return (
    <SC.ActiveComponent onMouseMove={onMouseMove} display={display}>
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
      {children}
    </SC.ActiveComponent>
  );
}

export default ActiveComponent;
