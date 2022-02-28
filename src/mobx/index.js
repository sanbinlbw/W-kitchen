import { makeAutoObservable, toJS } from "mobx";
import { componentList } from "./componentList";

export const store = makeAutoObservable({
  componentList,
  schema: {
    type: "W-Container",
    key: "root",
    props: {},
    children: [],
  },
});
