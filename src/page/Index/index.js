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
        <Header style={{ width: "84vw" }} />
        <Content
          style={{ margin: "3vh 1vw 0 1vw", height: "calc(100% - 56px)" }}
        >
          {React.Children.map(props.children, (child) => child)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Index;
