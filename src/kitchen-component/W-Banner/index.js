import React from "react";
import { Carousel } from "antd";
import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

function WBanner() {
  console.log(store.pageConfig[store.currentId]);
  const {
    contentStyle = {
      height: "160px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      background: "#364d79",
    },
    imgList = [1, 2, 3],
  } = toJS(store.pageConfig[store.currentId]);
  return (
    <Carousel autoplay>
      {imgList.map((item, index) => {
        return (
          <div key={index}>
            <h3 style={contentStyle}>{item}</h3>
          </div>
        );
      })}
    </Carousel>
  );
}

export default observer(WBanner);
