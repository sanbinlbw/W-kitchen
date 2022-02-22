import {
  TableOutlined,
  OneToOneOutlined,
  MinusSquareOutlined,
  GoldOutlined,
  ColumnHeightOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

// import WInput from "../kitchen-component/W-Input";
import WTable from "../kitchen-component/W-Table";
import WForm from "../kitchen-component/W-Form";
import WBanner from "../kitchen-component/W-Banner";
import WDivider from "../kitchen-component/W-Divider";

import TableConfig from "../kitchen-config-center/W-Table/config";
import FormConfig from "../kitchen-config-center/W-Form/config";
import BannerConfig from "../kitchen-config-center/W-Banner/config";
import DividerConfig from "../kitchen-config-center/W-Divider/config";

export const componentList = [
  {
    name: "W-Table",
    icon: <TableOutlined />,
    title: "表格",
    component: (props = {}) => <WTable {...props} />,
    config: TableConfig,
  },
  {
    name: "W-Form",
    icon: <FileSearchOutlined />,
    title: "表单",
    component: (props = {}) => <WForm {...props} />,
    config: FormConfig,
  },
  {
    name: "W-Banner",
    icon: <OneToOneOutlined />,
    title: "轮播图",
    component: (props = {}) => <WBanner {...props} />,
    config: BannerConfig,
  },
  {
    name: "W-Divider",
    icon: <ColumnHeightOutlined />,
    title: "分割线",
    component: (props = {}) => <WDivider {...props} />,
    config: DividerConfig,
  },
  {
    name: "W-Input",
    icon: <MinusSquareOutlined />,
    title: "输入框",
    // component: <WInput />,
  },
  {
    name: "W-Button",
    icon: <GoldOutlined />,
    title: "按钮",
  },
];
