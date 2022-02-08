import styled from "styled-components";

export const Content = styled.div`
  padding-left: 8%;
`;

export const Title = styled.span`
  opacity: 0.7;
  margin-right: 5px;
`;

export const Item = styled.div`
  margin-bottom: 30px;
`;

export const Color = styled.div`
  display: inline-block;
  height: 20px;
  width: 10%;
  background: ${(props) => props.color};
  transform: translateY(5px);
  cursor: pointer;
`;
