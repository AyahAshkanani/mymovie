import data from "../data";
import { makeAutoObservable } from "mobx";

class WatchStore {
  data = data;

  constructor() {
    makeAutoObservable(this);
  }
}

const WatchList = new WatchStore();
export default WatchStore;
