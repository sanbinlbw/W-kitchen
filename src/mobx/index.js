import { makeAutoObservable } from "mobx";
import {
  TableOutlined,
  OneToOneOutlined,
  MinusSquareOutlined,
  GoldOutlined,
} from "@ant-design/icons";

import WInput from "../kitchen-component/W-Input";
import WTable from "../kitchen-component/W-Table";
import WBanner from "../kitchen-component/W-Banner";

export const store = makeAutoObservable({
  // 物料区
  componentList: [
    {
      name: "W-Table",
      icon: <TableOutlined />,
      title: "表格",
      // component: <WTable />,
    },
    {
      name: "W-Banner",
      icon: <OneToOneOutlined />,
      title: "轮播图",
      component: <WBanner />,
    },
    {
      name: "W-Input",
      icon: <MinusSquareOutlined />,
      title: "输入框",
      component: <WInput />,
    },
    {
      name: "W-Button",
      icon: <GoldOutlined />,
      title: "按钮",
    },
  ],
  // 画布区组件
  pageComponent: [],
  // 配置区
  pageConfig: [],
  addList(component) {
    this.pageComponent.push(component);
  },
});
