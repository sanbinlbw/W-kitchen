import React, { useEffect, useState } from "react";
import KitchenCanvas from "../../kitchen-canvas";
import KitchenComponent from "../../kitchen-component";
import KitchenConfig from "../../kitchen-config-center";
import * as SC from "./style";
import { observer } from "mobx-react-lite";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function BuildCenter() {
  return (
    <SC.BuildCenter>
      <KitchenComponent />
      <KitchenCanvas />
      <KitchenConfig />
    </SC.BuildCenter>
  );
}

export default observer(BuildCenter);
