import React, { useState } from 'react';
import * as SC from './style';
import { useHistory } from 'react-router-dom';
import LoginPage from '../../component/LoginPage';
import Dialog from '../../component/Dialog';
import { store } from '../../mobx';
import { observer } from 'mobx-react-lite';

function Login() {
  let history = useHistory();
  return (
    <SC.Background>
      <Dialog disabled={store.showDialog}>
        <LoginPage />
      </Dialog>

      <SC.Content>
        <SC.TitleOne>W-Kitchen</SC.TitleOne>
        <SC.TitleTwo>一个可视化拖拽的创意平台</SC.TitleTwo>
        <SC.Introduce>
          不需要任何编程基础，通过简单的拖拽配置，制作属于你想要的网站
        </SC.Introduce>
        <SC.Button>
          <SC.ButtonLogin onClick={() => store.setDialog(true)}>
            登 陆
          </SC.ButtonLogin>
          <SC.ButtonPlay onClick={() => history.push('/home/BuildCenter')}>
            立即试用
          </SC.ButtonPlay>
        </SC.Button>
      </SC.Content>
    </SC.Background>
  );
}

export default observer(Login);
