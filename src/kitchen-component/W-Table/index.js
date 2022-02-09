import React from "react";
import { Table } from "antd";
import { toJS } from "mobx";
import { Button, Tag } from "antd";

const renderType = {
  text: (text) => text,
  button: (text) => <Button>{text}</Button>,
  a: (text) => <a>{text}</a>,
  tag: (text) => <Tag color="blue">{text}</Tag>,
};
function WTable(props) {
  const {
    marginTop = 0,
    marginBottom = 0,
    columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: renderType["a"],
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        render: renderType["text"],
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        render: renderType["tag"],
      },
    ],
    data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ],
    pageSize = 5,
  } = toJS(props);
  return (
    <Table
      style={{ marginTop, marginBottom }}
      pagination={{ pageSize }}
      columns={columns}
      dataSource={data}
    />
  );
}

export default WTable;
