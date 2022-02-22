import React from "react";
import { Form, Input, Button } from "antd";
import { toJS } from "mobx";

function WForm(props) {
  const {
    formItem = [
      {
        label: "姓名",
        name: "name",
        rule: [{ required: true, message: "不能为空!" }],
        render: () => <Input />,
      },
      {
        label: "年龄",
        name: "age",
        rule: [{ required: true, message: "不能为空!" }],
        render: () => <Input />,
      },
      {
        label: "性别",
        name: "sex",
        rule: [{ required: true, message: "不能为空!" }],
        render: () => <Input />,
      },
      {
        type: "button",
        render: () => <Button type="primary">Submit</Button>,
      },
    ],
    onFinish = () => {
      alert("请自行传入相应事件");
    },
    layout = "inline",
    marginTop = 0,
    marginBottom = 0,
    marginLeft = 0,
  } = toJS(props);

  const formItemLayout =
    layout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    layout === "horizontal"
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  return (
    <Form
      name="basic"
      {...formItemLayout}
      layout={layout}
      onFinish={onFinish}
      autoComplete="off"
      style={{ marginTop, marginBottom, marginLeft }}
    >
      {formItem.map((item, index) => {
        return item.type === "button" ? (
          <Form.Item
            name={item.name}
            label={item.label}
            rules={item.rules}
            key={index}
            style={{ marginBottom: "10px" }}
            {...buttonItemLayout}
          >
            {item.render()}
          </Form.Item>
        ) : (
          <Form.Item
            name={item.name}
            label={item.label}
            rules={item.rules}
            style={{ marginBottom: "10px" }}
            key={index}
          >
            {item.render()}
          </Form.Item>
        );
      })}
    </Form>
  );
}

export default WForm;
