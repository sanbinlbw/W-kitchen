import React, { useState, useEffect } from "react";
import { store } from "../mobx";
import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import * as SC from "./style";
import { configComponent } from "../config/config-component";

function KitchenConfig() {
  // const [config, setConfig] = useState(store.pageConfig[store.currentId]);

  // 配置更新后，更新mobx里的组件与配置
  // useEffect(() => {
  //   reaction(
  //     () => store.currentId,
  //     (currentId) => {
  //       setConfig(store.pageConfig[currentId]);
  //       console.log(store.pageConfig[currentId]);
  //     }
  //   );
  // }, []);
  const renderCenter = () => {
    return;
    <SC.ConfigTips>请选择组件</SC.ConfigTips>;
  };
  return <SC.ConfigCenter>{renderCenter()}</SC.ConfigCenter>;
}

export default observer(KitchenConfig);
