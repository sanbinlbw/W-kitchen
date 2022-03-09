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
  border: ${(props) => (props.isHover ? "1px dashed #155bd4" : "")};
`;

export const ActiveComponent = styled.div`
  display: ${(props) => props.display};
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
