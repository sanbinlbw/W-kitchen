import React, { useEffect, useState } from "react";
import KitchenCanvas from "../../kitchen-canvas";
import KitchenComponent from "../../kitchen-component";
import KitchenConfig from "../../kitchen-config-center";
import * as SC from "./style";
import { observer } from "mobx-react-lite";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function BuildCenter() {
  const onDragEnd = (result) => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="component">
        {(provided) => {
          return (
            <SC.BuildCenter
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <KitchenComponent />
              <KitchenCanvas />
              <KitchenConfig />
            </SC.BuildCenter>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

export default observer(BuildCenter);
