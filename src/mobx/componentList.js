import {
  OneToOneOutlined,
  ProfileOutlined,
  ColumnHeightOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

// import WInput from "../kitchen-component/W-Input";
// import WTable from "../kitchen-component/W-Table";
// import WForm from "../kitchen-component/W-Form";
// import WBanner from "../kitchen-component/W-Banner";
import WDivider from "../kitchen-component/W-Divider";
import WContainer from "../kitchen-component/W-Container";

export const componentList = [
  // {
  //   type: "W-Table",
  //   icon: <TableOutlined />,
  //   title: "表格",
  //   component: (props = {}) => <WTable {...props} />,
  //   config: TableConfig,
  // },
  // {
  //   type: "W-Form",
  //   icon: <FileSearchOutlined />,
  //   title: "表单",
  //   component: (props = {}) => <WForm {...props} />,
  //   config: FormConfig,
  // },
  // {
  //   name: "W-Banner",
  //   icon: <OneToOneOutlined />,
  //   title: "轮播图",
  //   component: (props = {}) => <WBanner {...props} />,
  //   config: BannerConfig,
  // },
  {
    icon: <OneToOneOutlined />,
    title: "容器",
    id: "0",
    config: {
      type: "W-Container",
      props: {},
      children: [],
    },
  },
  {
    icon: <ColumnHeightOutlined />,
    title: "分割线",
    id: "1",
    config: {
      type: "W-Divider",
      props: {},
      children: [],
    },
  },
  {
    icon: <ProfileOutlined />,
    title: "文本",
    id: "2",
    config: {
      type: "W-Text",
      props: {},
      children: [],
    },
  },
];
