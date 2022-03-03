import { makeAutoObservable, toJS } from "mobx";
import { componentList } from "./componentList";

export const store = makeAutoObservable({
  componentList,
  currentComponent: "",
  activeComponent: "",
  schema: {
    type: "W-Container",
    key: "root",
    props: {
      style: {
        width: "calc(50vw - 2px)",
        height: "calc(88vh - 2px)",
      },
    },
    children: [
      {
        type: "W-Container",
        key: "container-1",
        props: {
          style: {
            width: "100px",
            height: "100px",
            background: "pink",
          },
        },
        children: [
          {
            type: "W-Container",
            key: "container-2",
            props: {
              style: {
                width: "50px",
                height: "50px",
                background: "red",
              },
            },
            children: [
              {
                type: "W-Container",
                key: "container-3",
                props: {
                  style: {
                    width: "25px",
                    height: "25px",
                    background: "yellow",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  setCurrentComponent(key) {
    this.currentComponent = key;
  },
  setActiveComponent(key) {
    this.activeComponent = key;
  },
});
