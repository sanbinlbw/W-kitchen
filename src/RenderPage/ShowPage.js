import React from "react";
import RenderPage from ".";

function ShowPage() {
  const schema = JSON.parse(localStorage.getItem("schema"));
  console.log(schema);
  return (
    <div>
      <RenderPage config={schema} />
    </div>
  );
}

export default ShowPage;
