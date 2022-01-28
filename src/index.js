import React from "react";
import ReactDOM from "react-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Routes from "./router";
import "./common/antd.css";

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <Routes />
  </DndProvider>,
  document.getElementById("root")
);
