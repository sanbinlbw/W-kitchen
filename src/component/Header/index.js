import React from "react";
import { Button } from "antd";
import * as SC from "./style";

function Header() {
  return (
    <SC.Header>
      <span>W-kitchen</span>
      <div>
        <Button>预览</Button>
        <Button type="primary">代码导出</Button>
        <Button>退出</Button>
      </div>
    </SC.Header>
  );
}

export default Header;
