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
    config: {
      type: "W-Container",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "10vw",
          height: "200px",
          borderRadius: "0px",
          marginTop: "0px",
          marginBottom: "0px",
          marginLeft: "0vw",
          marginRight: "0vw",
          paddingTop: "0px",
          paddingBottom: "0px",
          paddingLeft: "0vw",
          paddingRight: "0vw",
          background: "#8F4B2E",
        },
      },
      children: [],
    },
  },
  {
    icon: <ColumnHeightOutlined />,
    title: "分割线",
    config: {
      type: "W-Divider",
      props: {
        style: {
          display: "block",
        },
      },
      children: [],
    },
  },
  {
    icon: <ProfileOutlined />,
    title: "文本",
    config: {
      type: "W-Text",
      props: {
        style: {
          display: "block",
        },
      },
      children: [],
    },
  },
];
