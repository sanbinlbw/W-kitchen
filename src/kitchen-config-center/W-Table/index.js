import React, { useState, useEffect } from "react";
import {
  Divider,
  Tag,
  Button,
  Slider,
  Input,
  Modal,
  Form,
  Select,
  InputNumber,
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
const { Option } = Select;

const renderType = {
  text: (text) => text,
  button: (text) => <Button>{text}</Button>,
  a: (text) => <a>{text}</a>,
  tag: (text) => <Tag color="blue">{text}</Tag>,
};

function TableConfig(props) {
  const { config, setConfig } = props;
  const [tagDialog, setTagDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState(false);
  const [form] = Form.useForm();
  const [dataForm] = Form.useForm();

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

  const deleteTag = (key) => {
    const newColumns = config.columns.filter((item) => item.key !== key);
    const newData = config.data.map((item) => {
      delete item[key];
      return item;
    });
    updateComponent({ columns: newColumns, data: newData });
  };

  const deleteData = (key) => {
    const newData = config.data.filter((item) => item.key !== key);

    updateComponent({ data: newData });
  };

  const changeColumn = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        values.render = renderType[values.renderType];
        const newColumns = config.columns.slice();
        const index = newColumns.findIndex((item) => item.key === values.key);
        if (index !== -1) {
          newColumns.splice(index, 1, values);
        } else {
          newColumns.push(values);
        }
        updateComponent({ columns: newColumns });
        setTagDialog(false);
      })
      .catch((info) => {
        console.log(info);
      });
  };

  const changeData = () => {
    dataForm
      .validateFields()
      .then((values) => {
        dataForm.resetFields();
        const newData = config.data.slice();
        const index = newData.findIndex((item) => item.key === values.key);
        if (index !== -1) {
          newData.splice(index, 1, values);
        } else {
          newData.push(values);
        }
        updateComponent({ data: newData });
        setDataDialog(false);
      })
      .catch((info) => {
        console.log(info);
      });
  };

  const showTagDialog = (item) => {
    if (item) {
      form.setFieldsValue(item);
    } else {
      form.resetFields();
    }
    setTagDialog(true);
  };

  const showDataDialog = (item) => {
    if (item) {
      dataForm.setFieldsValue(item);
    } else {
      dataForm.resetFields();
    }
    setDataDialog(true);
  };

  const changePageSize = (value) => {
    updateComponent({ pageSize: value });
  };

  const baseRender = () => {
    return (
      <div>
        <Divider orientation="left">基本布局</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>上边距:</SC.Title>
            <Slider value={config.marginTop} onChange={changeTop} />
          </SC.Item>
          <SC.Item>
            <SC.Title>下边距:</SC.Title>
            <Slider value={config.marginBottom} onChange={changeBottom} />
          </SC.Item>
        </SC.Content>
        <Divider orientation="left">基本功能</Divider>
        <SC.Content>
          <SC.Item>
            <SC.Title>每列标题:</SC.Title>
            {config.columns.map((item) => {
              return (
                <Tag
                  closable
                  onClose={() => deleteTag(item.key)}
                  key={item.key}
                  color="blue"
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                  onClick={() => showTagDialog(item)}
                >
                  {item.title}
                </Tag>
              );
            })}
            <Tag
              style={{
                borderStyle: "dashed",
                background: "#fff",
                cursor: "pointer",
              }}
              onClick={() => showTagDialog()}
            >
              <PlusOutlined /> 新标题
            </Tag>
          </SC.Item>
          <SC.Item>
            <SC.Title>每行内容:</SC.Title>
            {config.data.map((item, index) => {
              return (
                <Tag
                  closable
                  onClose={() => deleteData(item.key)}
                  key={item.key}
                  color="blue"
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                  onClick={() => showDataDialog(item)}
                >
                  第{index + 1}行数据
                </Tag>
              );
            })}
            <Tag
              style={{
                borderStyle: "dashed",
                background: "#fff",
                cursor: "pointer",
              }}
              onClick={() => showDataDialog()}
            >
              <PlusOutlined /> 新内容
            </Tag>
          </SC.Item>
          <SC.Item>
            <SC.Title>每页数据数量:</SC.Title>
            <InputNumber
              min={1}
              max={10}
              value={config.pageSize}
              onChange={changePageSize}
            />
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
        title="每列标题"
        visible={tagDialog}
        okText="确定"
        cancelText="取消"
        onOk={changeColumn}
        onCancel={() => setTagDialog(false)}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item name="title" label="标题" rules={tagRules}>
            <Input />
          </Form.Item>
          <Form.Item name="dataIndex" label="dataIndex" rules={tagRules}>
            <Input />
          </Form.Item>
          <Form.Item name="key" label="key" rules={tagRules}>
            <Input />
          </Form.Item>
          <Form.Item name="renderType" label="展示类型" rules={tagRules}>
            <Select style={{ width: 120 }}>
              <Option value="text">文本</Option>
              <Option value="button">按钮</Option>
              <Option value="a">A标签</Option>
              <Option value="tag">标签</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="每列标题"
        visible={dataDialog}
        okText="确定"
        cancelText="取消"
        onOk={changeData}
        onCancel={() => setDataDialog(false)}
      >
        <Form
          form={dataForm}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          {config.columns.map((item) => {
            return (
              <Form.Item
                name={item.dataIndex}
                label={item.title}
                rules={tagRules}
                key={item.key}
              >
                <Input />
              </Form.Item>
            );
          })}
          <Form.Item name="key" label="key" rules={tagRules}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default observer(TableConfig);
