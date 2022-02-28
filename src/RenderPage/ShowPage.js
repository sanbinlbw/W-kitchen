import React from "react";
import RenderPage from ".";
import { store } from "../mobx";

function ShowPage() {
  return (
    <div>
      <RenderPage config={store.schema} />
    </div>
  );
}

export default ShowPage;
