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
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "calc(63vw - 2px)",
        height: "calc(63vh - 2px)",
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingLeft: "0vw",
        paddingRight: "0vw",
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
    this.schemaMap[id].props = props;
  },
  // 找到schema树中对应的children引用地址
  setSchema(id, configId) {
    for (let i of this.schemaMap[id].children) {
      if (i.id === configId) {
        this.schemaMap[configId] = i;
      }
    }
  },
  // 直接放入引用地址
  addSchema(id, config) {
    this.schemaMap[id].children.push(config);
    this.uniqueId++;
  },
  addItem(key, value) {
    store[key] = value;
  },
});

