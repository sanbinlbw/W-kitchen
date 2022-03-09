import styled from "styled-components";


export const Component = styled.div`
  background: pink;
  position: absolute;
  bottom: 5vh;
  height: 20vh;
  width: 86%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fill, calc(5vw - 10px));
  overflow: hidden;
  background: #fff;
  padding: 10px;
`;

export const Item = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: 20px;
  opacity: ${(props) => (props.isDragging ? 0.1 : 0.8)};
  &:hover {
    background: #1890ff;
    color: #fff;
  }
`;