// 展示配置中心的方法
import BannerConfig from "../kitchen-config-center/W-Banner";
import DividerConfig from "../kitchen-config-center/W-Divider";
import TableConfig from "../kitchen-config-center/W-Table";
import FormConfig from "../kitchen-config-center/W-Form";

export const configComponent = (config = {}, setConfig) => {
  const { type } = config;
  const configType = {
    "W-Banner": <BannerConfig config={config} setConfig={setConfig} />,
    "W-Divider": <DividerConfig config={config} setConfig={setConfig} />,
    "W-Table": <TableConfig config={config} setConfig={setConfig} />,
    "W-Form": <FormConfig config={config} setConfig={setConfig} />,
  };
  return configType[type];
};
