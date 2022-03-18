const { resolve } = require('path');

module.exports = function override(config) {
  // 修改生产环境根路径
  if (config.mode === 'production') {
    config.output.publicPath = '/'
  }
  
  return config;
};