import styled from "styled-components";
import logo from "../../assets/image/logo.png";

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  background: url(${logo});
  background-size: cover;
  margin-left: 50%;
  margin-top: 30px;
  margin-bottom: 20px;
  transform: translateX(-50%);
`;
