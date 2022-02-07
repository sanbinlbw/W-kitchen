import React from "react";
import { store } from "../mobx";
import { observer } from "mobx-react-lite";
import * as SC from "./style";
import { configComponent } from "../config/config-component";

function KitchenConfig() {
  const renderCenter = () => {
    console.log(store.currentId);
    return store.currentId >= 0 ? (
      configComponent(store.pageConfig[store.currentId])
    ) : (
      <SC.ConfigTips>请选择组件</SC.ConfigTips>
    );
  };
  return <SC.ConfigCenter>{renderCenter()}</SC.ConfigCenter>;
}

export default observer(KitchenConfig);
