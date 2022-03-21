import styled from 'styled-components';
import indexBackground from '../../assets/image/indexBackground.jpg';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${indexBackground});
  background-size: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  color: #fff;
`;

export const Content = styled.div`
  width: 60vw;
  height: 70vh;
`;

export const TitleOne = styled.div`
  text-align: center;
  width: 100%;
  font-size: 5vw;
  font-weight: 800;
`;

export const TitleTwo = styled.div`
  width: 100%;
  font-size: 5vw;
  margin-bottom: 5vh;
`;

export const Introduce = styled.div`
  width: 100%;
  opacity: 0.7;
  font-weight: 200;
  font-size: 1.5vw;
  text-align: center;
  margin-bottom: 15vh;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonLogin = styled.div`
  text-align: center;
  width: 20vw;
  display: inline-block;
  margin-right: 7vw;
  height: 7vh;
  line-height: 7vh;
  background: #8f4b2e;
  border: 1px solid #8f4b2e;
  border-radius: 0.5vw;
  font-size: 1vw;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonPlay = styled.div`
  text-align: center;
  width: 20vw;
  display: inline-block;
  height: 7vh;
  line-height: 7vh;
  background: rgba(255, 255, 255, 0);
  border: 1px solid #8f4b2e;
  color: #8f3a16;
  border-radius: 0.5vw;
  font-size: 1vw;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #c23c04;
  }
`;
