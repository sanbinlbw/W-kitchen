import React, { useState, useEffect } from "react";
import { store } from "../mobx";
import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import * as SC from "./style";
import { configComponent } from "../config/config-component";

function KitchenConfig() {
  console.log("act", store.activeComponent);
  console.log("schemaMap", store.schemaMap);
  const renderCenter = () => {
    return store.activeComponent === "" ? (
      <SC.ConfigTips>请选择组件</SC.ConfigTips>
    ) : (
      configComponent(store.schemaMap[store.activeComponent].type)
    );
  };
  return <SC.ConfigCenter>{renderCenter()}</SC.ConfigCenter>;
}

export default observer(KitchenConfig);
