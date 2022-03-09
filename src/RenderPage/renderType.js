import WDivider from "../kitchen-component/W-Divider";
import WContainer from "../kitchen-component/W-Container";
import WText from "../kitchen-component/W-Text";

export const renderType = {
  // 容器schema解析方式
  "W-Container": (props, children, id) => {
    return <WContainer {...props} children={children} id={id} />;
  },
  // 文本schema解析方式
  "W-Text": (props, children, id) => {
    return <WText {...props} />;
  },
  // 分割线schema解析方式
  "W-Divider": (props, children, id) => {
    return <WDivider {...props} />;
  },
};
