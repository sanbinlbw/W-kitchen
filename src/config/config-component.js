import BannerConfig from "../kitchen-config-center/W-Banner";

export const configComponent = (config = {}) => {
  const { type } = config;
  const configType = {
    "W-Banner": <BannerConfig {...config} />,
  };
  return configType[type];
};
