import React from "react";
import RenderPage from ".";

function ShowPage() {
  const schema = JSON.parse(localStorage.getItem("schema"));
  console.log(schema);
  schema.props.style.width = "88vw";
  delete schema.props.style.height;
  delete schema.props.style.overflowY;
  schema.props.style.transform = "scale(1.14)";
  schema.props.style.transformOrigin = "top left";
  return <RenderPage config={schema} />;
}

export default ShowPage;
