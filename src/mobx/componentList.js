import {
  TableOutlined,
  OneToOneOutlined,
  MinusSquareOutlined,
  GoldOutlined,
} from "@ant-design/icons";

import WInput from "../kitchen-component/W-Input";
import WTable from "../kitchen-component/W-Table";
import WBanner from "../kitchen-component/W-Banner";

import BannerConfig from "../kitchen-config-center/W-Banner/config";

export const componentList = [
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
    config: BannerConfig,
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
];
