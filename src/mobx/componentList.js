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
          width: "200px",
          height: "200px",
          borderRadius: "0px",
          marginTop: "0px",
          marginBottom: "0px",
          marginLeft: "0px",
          marginRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
          backgroundColor: "#8F4B2E",
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
          width: "3vw",
          display: "block",
          marginTop: "0px",
          marginBottom: "0px",
          marginLeft: "0vw",
          marginRight: "0vw",
          fontSize: "12px",
          fontWeight: 400,
          color: "#000",
          wordWrap: "break-word",
          wordBreak: "break-all",
        },
        content: "content",
      },
      children: [],
    },
  },
];
