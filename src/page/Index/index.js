import React, { useState } from 'react';

import { Layout } from 'antd';
import { Steps, Hints } from 'intro.js-react';

import Header from '../../component/Header';

const steps = [
  {
    element: '.indexLogo',
    intro: '鼠标移入可出现导航菜单',
  },
  {
    element: '.kitchenComponent',
    intro: '物料区，用鼠标将物料拖入画布区。',
  },
  {
    element: '.canvas',
    intro:
      '画布区，点击拖入的物料可在配置中心里进行配置修改，选中画布区中的物料，可以进行拖拽控制大小。',
  },
  {
    element: '.kitchenConfig',
    intro: '编辑区，收起时可由鼠标拖动放置页面任意处，点击可展开具体配置项',
  },
  {
    element: '.preview',
    intro: '点击可查看最终效果页面',
  },
  {
    element: '.schema',
    intro: '点击可查看当前schema树',
  },
];

function Index(props) {
  const [enabled, setEnabled] = useState(true);
  return (
    <div style={{ height: '100vh' }}>
      <Steps
        enabled={enabled}
        steps={steps}
        initialStep={0}
        options={{
          prevLabel: '上一步',
          nextLabel: '下一步',
          doneLabel: '完成',
        }}
        onExit={() => setEnabled(false)}
      />
      <Layout>
        <Header />
        <div
          style={{
            margin: '3vh 1vw 0 1vw',
            height: 'calc(90vh)',
          }}
        >
          {React.Children.map(props.children, (child) => child)}
        </div>
      </Layout>
    </div>
  );
}

export default Index;
