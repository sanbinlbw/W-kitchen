import { makeAutoObservable, toJS } from "mobx";
import { componentList } from "./componentList";

export const store = makeAutoObservable({
  componentList,
  currentComponent: '',
  activeComponent: '',
  // 当前屏幕宽高度，自适应需要计算
  screenWidth: 0,
  screenHeight: 0,
  showDialog: false,
  schema: {
    type: 'W-Container',
    id: 'root',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 'calc(88vw - 2px)',
        height: 'calc(88vh - 2px)',
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '0vw',
        paddingRight: '0vw',
        background: '#fff',
        overflowY: 'auto',
        overflowX: 'none',
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
  setScreen(width, height) {
    this.screenWidth = width;
    this.screenHeight = height;
  },
  setDialog(isShow) {
    this.showDialog = isShow;
  },
  setProps(id, props) {
    this.schemaMap[id].props = props;
  },
  initSchema(newSchema) {
    this.schema = newSchema;
    // 遍历schema树，建立schema和schemaMap中的引用地址连接
    if (!this.schema) return [];
    this.schemaMap = {};
    let queue = [this.schema];
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let node = queue.shift();
        this.schemaMap[node.id] = node;
        for (let i of node.children) {
          queue.push(i);
        }
      }
    }
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
  },
  deleteSchema() {
    const fId = this.schemaMap[this.activeComponent].fId;
    const index = this.schemaMap[fId].children.findIndex(
      item => item.id === this.activeComponent
    );
    this.schemaMap[fId].children.splice(index, 1);
    delete this.schemaMap[this.activeComponent];
    this.activeComponent = '';
  },
  prevSchema() {
    const fId = this.schemaMap[this.activeComponent].fId;
    const index = this.schemaMap[fId].children.findIndex(
      item => item.id === this.activeComponent
    );
    if (index === 0) return;
    [
      this.schemaMap[fId].children[index],
      this.schemaMap[fId].children[index - 1],
    ] = [
      this.schemaMap[fId].children[index - 1],
      this.schemaMap[fId].children[index],
    ];
  },
  nextSchema() {
    const fId = this.schemaMap[this.activeComponent].fId;
    const index = this.schemaMap[fId].children.findIndex(
      item => item.id === this.activeComponent
    );
    if (index === this.schemaMap[fId].children.length - 1) return;
    [
      this.schemaMap[fId].children[index],
      this.schemaMap[fId].children[index + 1],
    ] = [
      this.schemaMap[fId].children[index + 1],
      this.schemaMap[fId].children[index],
    ];
  },
  addItem(key, value) {
    store[key] = value;
  },
});

