// 展示配置中心的方法
import BannerConfig from "../kitchen-config-center/W-Banner";
import DividerConfig from "../kitchen-config-center/W-Divider";

export const configComponent = (config = {}, setConfig) => {
  const { type } = config;
  const configType = {
    "W-Banner": <BannerConfig config={config} setConfig={setConfig} />,
    "W-Divider": <DividerConfig config={config} setConfig={setConfig} />,
  };
  return configType[type];
};
