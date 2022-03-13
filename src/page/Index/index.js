import React from "react";

import { Layout } from "antd";

import Header from "../../component/Header";

function Index(props) {
  return (
    <div style={{ height: "100vh" }}>
      <Layout>
        <Header />
        <div
          style={{
            margin: "3vh 1vw 0 1vw",
            height: "calc(90vh)",
          }}
        >
          {React.Children.map(props.children, (child) => child)}
        </div>
      </Layout>
    </div>
  );
}

export default Index;
