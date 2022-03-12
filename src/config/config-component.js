// 展示配置中心的方法
import ContainerConfig from "../kitchen-config-center/W-Container";
import DividerConfig from "../kitchen-config-center/W-Divider";
import TextConfig from "../kitchen-config-center/W-Text";

export const configComponent = (type) => {
  const configType = {
    "W-Container": <ContainerConfig />,
    "W-Divider": <DividerConfig />,
    "W-Text": <TextConfig />,
  };
  return configType[type];
};
