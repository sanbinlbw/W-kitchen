import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { withRouter } from "react-router-dom";
import {
  GroupOutlined,
  CodeSandboxOutlined,
  BankOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import * as SC from "./style";

const { Sider } = Layout;

const menuItem = [
  {
    title: "页面库",
    icon: <ReadOutlined />,
    url: "/home/pageLibrary",
  },
  {
    title: "物料中心",
    icon: <CodeSandboxOutlined />,
    url: "/home/materialSelect",
  },
  {
    title: "构建厨房",
    icon: <BankOutlined />,
    url: "/home/BuildCenter",
  },
  {
    title: "默认模版库",
    icon: <GroupOutlined />,
    url: "/home/stencil",
  },
];

function SideBar(props) {
  const index = menuItem.findIndex(
    (item) => item.url === props.location.pathname
  );
  const [currentUrl] = useState(String(index));
  const [menuVisible, setMenuVisible] = useState(false);

  const pushLink = (item) => {
    const url = menuItem[item.key].url;
    props.history.push(url);
  };

  const menuRender = () => {
    return (
      <Menu onClick={pushLink}>
        {menuItem.map((item, index) => {
          return (
            <Menu.Item key={index} icon={item.icon}>
              {item.title}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  return (
    <Dropdown
      overlay={menuRender}
      onVisibleChange={() => setMenuVisible(!menuVisible)}
      visible={menuVisible}
    >
      <SC.Logo />
    </Dropdown>
  );
}

export default withRouter(SideBar);
