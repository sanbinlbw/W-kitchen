import { Button, Tag } from "antd";
const renderType = {
  text: (text) => text,
  button: (text) => <Button>{text}</Button>,
  a: (text) => <a>{text}</a>,
  tag: (text) => <Tag color="blue">{text}</Tag>,
};

const config = {
  type: "W-Table",
  columns: [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      renderType: "a",
      render: renderType["a"],
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      renderType: "text",
      render: renderType["text"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      renderType: "tag",
      render: renderType["tag"],
    },
  ],
  data: [
    {
      key: "0",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
  ],
  pageSize: 5,
  marginTop: 0,
  marginBottom: 0,
};

export default config;
