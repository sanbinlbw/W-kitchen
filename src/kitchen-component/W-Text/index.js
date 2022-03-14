import React from "react";
import { toJS } from "mobx";

function WText(props) {
  const {
    style = {},
    content = "content",
    isConfig = false,
    canHref,
    hrefUrl,
  } = toJS(props);
  return (
    <div
      style={canHref ? { ...style, cursor: "pointer" } : style}
      onClick={() => {
        if (canHref && !isConfig) window.open(hrefUrl);
      }}
    >
      {content}
    </div>
  );
}

export default WText;
