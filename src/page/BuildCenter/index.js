import React, { useEffect, useState } from "react";
import KitchenCanvas from "../../kitchen-canvas";
import KitchenComponent from "../../kitchen-component";
import KitchenConfig from "../../kitchen-config-center";
import * as SC from "./style";
import { store } from '../../mobx';
import { observable } from 'mobx';
import { getSchema } from '../../request';
import { observer } from 'mobx-react-lite';
import { Rnd } from 'react-rnd';
import { DownOutlined, UpOutlined, EditOutlined } from '@ant-design/icons';

function BuildCenter() {
  const [showConfig, setShowConfig] = useState(false);
  // todo: 获取路由传值，传值请求getSchema，赋值给页面中schema

  // useEffect(() => {
  //   getSchema(0, 'test').then(res => {
  //     if (Object.keys(res.data).length !== 0)
  //       store.initSchema(observable(res.data));
  //   });
  // }, []);
  return (
    <SC.BuildCenter>
      <KitchenComponent />
      <KitchenCanvas />
      <Rnd
        default={{ x: 200, y: 50 }}
        enableResizing={false}
        disableDragging={showConfig}
      >
        <SC.KitchenConfig className="kitchenConfig">
          <a
            onClick={e => {
              e.preventDefault();
              setShowConfig(!showConfig);
            }}
          >
            <EditOutlined />
            配置中心 {showConfig ? <UpOutlined /> : <DownOutlined />}
          </a>
          {showConfig && <KitchenConfig />}
        </SC.KitchenConfig>
      </Rnd>
      {/* <SC.KitchenComponent>

      </SC.KitchenComponent> */}
      {/* <KitchenConfig /> */}
    </SC.BuildCenter>
  );
}

export default observer(BuildCenter);
