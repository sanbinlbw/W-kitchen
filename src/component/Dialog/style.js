import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0);
  }

  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const Dialog = styled.div`
  z-index: 11;
  position: fixed;
  left: 50%;
  top: 50%;
  animation-fill-mode: forwards;
  animation-name: ${rotate};
  animation-duration: 0.5s;
  display: ${(props) => (props.disabled ? 'block' : 'none')};
`;
