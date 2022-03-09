import React, { useEffect, useState } from "react";
import KitchenCanvas from "../../kitchen-canvas";
import KitchenComponent from "../../kitchen-component";
import KitchenConfig from "../../kitchen-config-center";
import * as SC from "./style";
import { observer } from "mobx-react-lite";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function BuildCenter() {
  return (
    <div>
      <SC.BuildCenter>
        <KitchenCanvas />
        <KitchenConfig />
      </SC.BuildCenter>
      <KitchenComponent />
    </div>
  );
}

export default observer(BuildCenter);
