// 展示配置中心的方法
import ContainerConfig from "../kitchen-config-center/W-Container";
import TextConfig from "../kitchen-config-center/W-Text";

export const configComponent = (type) => {
  const configType = {
    "W-Container": <ContainerConfig />,
    "W-Text": <TextConfig />,
  };
  return configType[type];
};
