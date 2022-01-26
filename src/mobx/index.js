import { makeAutoObservable } from "mobx";

export const store = makeAutoObservable({
  count: 0,
  setCount(count) {
    this.count = count;
  },
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
});
