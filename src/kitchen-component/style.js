import styled from "styled-components";


export const Component = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, calc(5vw - 10px));
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