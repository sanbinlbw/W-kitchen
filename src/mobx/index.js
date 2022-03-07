import { makeAutoObservable, toJS } from "mobx";
import { componentList } from "./componentList";

export const store = makeAutoObservable({
  componentList,
  uniqueId: 1,
  currentComponent: "",
  activeComponent: "",
  schema: {
    type: "W-Container",
    id: "root",
    props: {
      style: {
        display: "inline-block",
        width: "calc(50vw - 2px)",
        height: "calc(88vh - 2px)",
        background: "#fff",
        overflowY: "auto",
      },
    },
    children: [],
  },
  setCurrentComponent(id) {
    this.currentComponent = id;
  },
  setActiveComponent(id) {
    this.activeComponent = id;
  },
  setProps(id, props) {
    this.propsMap[id] = props;
  },
  // 找到schema树中对应的children引用地址
  setChildren(id, configId) {
    for (let i of this.childrenMap[id]) {
      if (i.id === configId) {
        this.childrenMap[configId] = i.children;
      }
    }
  },
  // 直接放入引用地址
  addChildren(id, config) {
    this.childrenMap[id].push(config);
    this.uniqueId++;
  },
  addItem(key, value) {
    store[key] = value;
  },
});

