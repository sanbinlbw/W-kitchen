// 展示配置中心的方法
import BannerConfig from "../kitchen-config-center/W-Banner";
import DividerConfig from "../kitchen-config-center/W-Divider";
import TableConfig from "../kitchen-config-center/W-Table";
import FormConfig from "../kitchen-config-center/W-Form";
import ContainerConfig from "../kitchen-config-center/W-Container";

export const configComponent = (type) => {
  const configType = {
    // "W-Banner": <BannerConfig config={config} setConfig={setConfig} />,
    // "W-Divider": <DividerConfig config={config} setConfig={setConfig} />,
    // "W-Table": <TableConfig config={config} setConfig={setConfig} />,
    // "W-Form": <FormConfig config={config} setConfig={setConfig} />,
    "W-Container": <ContainerConfig />,
  };
  return configType[type];
};
