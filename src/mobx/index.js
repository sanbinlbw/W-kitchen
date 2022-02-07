import { makeAutoObservable, toJS } from "mobx";
import { componentList } from "./componentList";

export const store = makeAutoObservable({
  // 当前选中组件index
  currentId: undefined,
  // 物料区
  componentList,
  // 画布区组件
  pageComponent: [],
  // 配置区
  pageConfig: [],
  addList(component) {
    this.pageComponent.push(component);
  },
  addConfig(config) {
    this.pageConfig.push(config);
  },
  setId(id) {
    this.currentId = id;
  },
  setConfig(config) {
    this.pageConfig[this.currentId] = config;
  },
  setComponent(component) {
    this.pageComponent[this.currentId] = component;
  },
});
