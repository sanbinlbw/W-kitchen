import styled from "styled-components";


export const Component = styled.div`
  position: fixed;
  top: 7vh;
  left: 0;
  background: pink;
  height: calc(93vh);
  display: grid;
  grid-template-rows: repeat(auto-fill, calc(4vw));
  row-gap: 10px;
  overflow-y: auto;
  background: #fff;
  padding: 5px;
`;

export const Item = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: 1vw;
  opacity: ${(props) => (props.isDragging ? 0.1 : 0.8)};
  &:hover {
    background: #1890ff;
    color: #fff;
  }
`;