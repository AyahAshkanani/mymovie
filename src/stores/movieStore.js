import data from "../data";
import { makeAutoObservable } from "mobx";

class MovieStore {
  data = data;

  constructor() {
    //when data is updated the components will be rerendered
    makeAutoObservable(this);
  }
  handleDelete = (dataId) => {
    const updateMovie = this.data.filter(data => data.id !== dataId);
    this.data = updateMovie;
};

  updateMovie = (updateMovie) => {
    const movie = this.movie.find((movie) => movie.name === updateMovie);
    movie.name = updateMovie.name;
  };
}

const movieStore = new MovieStore();
export default movieStore;
