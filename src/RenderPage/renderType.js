import WDivider from "../kitchen-component/W-Divider";
import WContainer from "../kitchen-component/W-Container";
import WText from "../kitchen-component/W-Text";

export const renderType = {
  // 容器schema解析方式
  "W-Container": (props, children) => {
    return <WContainer {...props} children={children} />;
  },
  // 文本schema解析方式
  "W-Text": (props, children) => {
    return <WText {...props} />;
  },
  // 分割线schema解析方式
  "W-Divider": (props, children) => {
    return <WDivider {...props} />;
  },
};
