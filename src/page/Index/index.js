import React from "react";

import { Layout } from "antd";

import SideBar from "../../component/SideBar";
import Header from "../../component/Header";

const { Content } = Layout;

function Index(props) {
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0", height: "calc(100% - 56px)" }}>
          {React.Children.map(props.children, (child) => child)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Index;
