import React from 'react';
import * as SC from './style';
import { useHistory } from 'react-router-dom';
import LoginPage from '../../component/LoginPage';

function Login() {
  let history = useHistory();

  return (
    <SC.Background>
      <div
        style={{
          zIndex: 10,
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          display: 'grid',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <LoginPage />
      </div>

      <SC.Content>
        <SC.TitleOne>W-Kitchen</SC.TitleOne>
        <SC.TitleTwo>一个可视化拖拽的创意平台</SC.TitleTwo>
        <SC.Introduce>
          不需要任何编程基础，通过简单的拖拽配置，制作属于你想要的网站
        </SC.Introduce>
        <SC.Button>
          <SC.ButtonLogin>登 陆</SC.ButtonLogin>
          <SC.ButtonPlay onClick={() => history.push('/home/BuildCenter')}>
            立即试用
          </SC.ButtonPlay>
        </SC.Button>
      </SC.Content>
    </SC.Background>
  );
}

export default Login;
