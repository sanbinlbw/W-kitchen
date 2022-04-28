// 弹出框及动画
import React from 'react';
import * as SC from './style';
import { CloseOutlined } from '@ant-design/icons';
import { store } from '../../mobx';

function Dialog(props) {
  const { children, disabled = 'false' } = props;
  return (
    <SC.Dialog disabled={disabled}>
      <CloseOutlined
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: '#000',
          fontSize: '20px',
        }}
        onClick={() => {
          store.setDialog(false);
        }}
      />
      {children}
    </SC.Dialog>
  );
}

export default Dialog;
