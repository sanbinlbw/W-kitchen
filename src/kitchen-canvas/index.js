import React, { useEffect, useState } from 'react';
import * as SC from './style';
import { store } from '../mobx';
import { observer } from 'mobx-react-lite';
import Canvas from './Canvas';
import _ from 'lodash';

function KitchenCanvas() {
  const [item, setItem] = useState('');
  // 相当于componentDidMount
  useEffect(() => {
    setItem('canvas');
  }, []);
  useEffect(() => {
    if (item) {
      const itemDom = document.querySelector(`.canvas`);
      // 加2是因为要算入border宽度
      store.setScreen(
        _.round(itemDom.getBoundingClientRect().width + 2, 2),
        _.round(itemDom.getBoundingClientRect().height + 2, 2)
      );
      console.log(store.screenWidth, store.screenHeight);
    }
  }, [item]);
  return <Canvas config={store.schema} />;
}

export default observer(KitchenCanvas);
