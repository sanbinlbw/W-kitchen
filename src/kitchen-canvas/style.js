import styled from "styled-components";

export const Canvas = styled.div`
  height: 88vh;
  background: #fff;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  overflow-y: auto;
`;

export const CanvasTips = styled.div`
  width: 100%;
  height: 88vh;
  line-height: 88vh;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  opacity: 0.5;
`;

export const CanvasComponent = styled.div`
  display: inline-block;
  border: ${(props) =>
    props.isHover ? "1px dashed #155bd4" : "1px solid #fff"};
`;

export const ActiveComponent = styled.div`
  display: inline-block;
  border: 1px dashed #155bd4;
`;

export const DropTips = styled.div`
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #1890ff;
  color: #fff;
  font-weight: 600;
  font-size: 17px;
`;
