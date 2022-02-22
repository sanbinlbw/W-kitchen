import { Form, Input, Button, Space } from "antd";

const config = {
  type: "W-Form",
  formItem: [
    {
      label: "姓名",
      name: "name",
      ruleType: "require",
      rule: [{ required: true, message: "不能为空!" }],
      renderType: "input",
      render: () => <Input />,
    },
    {
      label: "年龄",
      name: "age",
      ruleType: "require",
      rule: [{ required: true, message: "不能为空!" }],
      renderType: "input",
      render: () => <Input />,
    },
    {
      label: "性别",
      name: "sex",
      ruleType: "require",
      rule: [{ required: true, message: "不能为空!" }],
      renderType: "input",
      render: () => <Input />,
    },
    {
      type: "button",
      render: () => {
        return (
          <Space>
            <Button type="primary">Submit</Button>
            <Button>Cancel</Button>
          </Space>
        );
      },
    },
  ],
  onFinish: () => {
    alert("请自行传入相应事件");
  },
  // form: "form",
  layout: "inline",
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
};

export default config;
