import React, { useState, useEffect } from "react";
import {
  Divider,
  Radio,
  Switch,
  Slider,
  Tag,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { store } from "../../mobx";
import { observer } from "mobx-react-lite";
import * as SC from "../common/style";

const tagRules = [
  {
    required: true,
    message: "不能为空!",
  },
];
const ruleType = {
  default: undefined,
  require: [{ required: true, message: "不能为空!" }],
};
const renderType = {
  input: () => <Input />,
};
const { Option } = Select;

function FormConfig(props) {
  const { config, setConfig } = props;
  const [form] = Form.useForm();
  const [itemDialog, setItemDialog] = useState(false);
  const updateComponent = (newConfig) => {
    setConfig({
      ...config,
      ...newConfig,
    });
  };

  const changeTop = (value) => {
    updateComponent({ marginTop: value });
  };

  const changeBottom = (value) => {
    updateComponent({ marginBottom: value });
  };

  const changeLeft = (value) => {
    updateComponent({ marginLeft: value });
  };

  const changeLayout = ({ target: { value } }) => [
    updateComponent({ layout: value }),
  ];

  const deleteItem = (name) => {
    const newItems = config.formItem.filter((item) => item.name !== name);
    updateComponent({ formItem: newItems });
  };

  const showItemDialog = (item) => {
    if (item) {
      form.setFieldsValue(item);
    } else {
      form.resetFields();
    }
    setItemDialog(true);
  };

  const changeItem = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        values.rule = ruleType[values.ruleType];
        values.render = renderType[values.renderType];
        const newFormItem = config.formItem.slice();
        const index = newFormItem.findIndex(
          (item) => item.name === values.name
        );
        if (index !== -1) {
          newFormItem.splice(index, 1, values);
        } else {
          newFormItem.push(values);
        }
        updateComponent({ formItem: newFormItem });
        setItemDialog(false);
      })
      .catch((info) => {
        console.log(info);
      });
  };
  const baseRender = () => {
    return (
      <div>
        <Divider orientation="left">基本布局</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>表单布局:</SC.Title>
            <Radio.Group onChange={changeLayout} value={config.layout}>
              <Radio.Button value="horizontal">水平</Radio.Button>
              <Radio.Button value="vertical">垂直</Radio.Button>
              <Radio.Button value="inline">排列</Radio.Button>
            </Radio.Group>
          </SC.Item>
          <SC.Item>
            <SC.Title>上边距:</SC.Title>
            <Slider value={config.marginTop} onChange={changeTop} />
          </SC.Item>
          <SC.Item>
            <SC.Title>下边距:</SC.Title>
            <Slider value={config.marginBottom} onChange={changeBottom} />
          </SC.Item>
          <SC.Item>
            <SC.Title>左边距:</SC.Title>
            <Slider value={config.marginLeft} onChange={changeLeft} />
          </SC.Item>
        </SC.Content>
        <Divider orientation="left">基本功能</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>表单项:</SC.Title>
            {config.formItem.map((item, index) => {
              return (
                <Tag
                  closable
                  onClose={() => deleteItem(item.name)}
                  key={item.name}
                  color="blue"
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                  onClick={() => showItemDialog(item)}
                >
                  第{index + 1}项
                </Tag>
              );
            })}
            <Tag
              style={{
                borderStyle: "dashed",
                background: "#fff",
                cursor: "pointer",
              }}
              onClick={() => showItemDialog()}
            >
              <PlusOutlined /> 新内容
            </Tag>
          </SC.Item>
        </SC.Content>
      </div>
    );
  };

  // 配置更新后，更新mobx里的组件与配置
  useEffect(() => {
    const component = store.componentList.find(
      (item) => item.name === config.type
    ).component;
    store.setComponent(component(config));
    store.setConfig(config);
  }, [config]);

  return (
    <div>
      {baseRender()}
      <Modal
        title="表单项"
        visible={itemDialog}
        okText="确定"
        cancelText="取消"
        onOk={changeItem}
        onCancel={() => setItemDialog(false)}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item name="label" label="标题" rules={tagRules}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="name" rules={tagRules}>
            <Input />
          </Form.Item>
          <Form.Item name="ruleType" label="校验规则" rules={tagRules}>
            <Select style={{ width: 120 }}>
              <Option value="default">默认</Option>
              <Option value="require">必填</Option>
            </Select>
          </Form.Item>
          <Form.Item name="renderType" label="展示类型" rules={tagRules}>
            <Select style={{ width: 120 }}>
              <Option value="input">输入框</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default observer(FormConfig);
