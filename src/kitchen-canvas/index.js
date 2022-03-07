import React, { useEffect } from "react";
import * as SC from "./style";
import { store } from "../mobx";
import { observer } from "mobx-react-lite";
import Canvas from "./Canvas";

function KitchenCanvas() {
  return <Canvas config={store.schema} />;
}

export default observer(KitchenCanvas);
