import React from "react";
import { Carousel } from "antd";
import { toJS } from "mobx";

function WBanner(props) {
  const {
    imgList = [1, 2],
    dotPosition = "bottom",
    auto = true,
    contentStyle = {
      height: "160px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      background: "#364d79",
    },
    marginTop = 0,
    marginBottom = 0,
  } = toJS(props);
  return (
    <Carousel
      dotPosition={dotPosition}
      autoplay={auto}
      style={{ marginTop, marginBottom }}
    >
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

export default WBanner;
