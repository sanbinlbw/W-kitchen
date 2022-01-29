import { makeAutoObservable, toJS } from "mobx";
import { componentList } from "./componentList";

export const store = makeAutoObservable({
  // 当前选中组件
  currentId: null,
  // 物料区
  componentList,
  // 画布区组件
  pageComponent: [],
  // 配置区
  pageConfig: [],
  addList(component) {
    this.pageComponent.push(component);
  },
  addConfig(json) {
    this.pageConfig.push(json);
  },
  setId(id) {
    this.currentId = id;
  },
});
