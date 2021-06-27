import data from "../data";
import { makeAutoObservable } from "mobx";

class MovieStore {
    data = data;

    constructor() {
        //when data is updated the components will be rerendered 
        makeAutoObservable(this);
    };


};

export default MovieStore;