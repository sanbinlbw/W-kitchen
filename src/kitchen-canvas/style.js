import styled from "styled-components";


export const CanvasTips = styled.div`
  width: 100%;
  height: 100%;
  line-height: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  background: #fff;
  span {
    opacity: 0.5;
  }
`;

export const CanvasComponent = styled.div`
  display: ${(props) => props.display};
  border: ${(props) =>
    // props.isHover ? "1px dashed #155bd4" : "1px dashed rgba(255,255,255,0)"};
    props.isHover ? "1px dashed #155bd4" : ""};
  width: ${(props) => props.isInside && "100%"};
`;

export const ActiveComponent = styled.div`
  position: relative;
  display: ${(props) => props.display};
  width: ${(props) => props.isInside && "100%"};
`;

export const OperatingComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  align-content: center;
  width: 70px;
  height: 20px;
  position: absolute;
  left: 0;
  bottom: -21px;
  background: #1890ff;
  color: #fff;
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
