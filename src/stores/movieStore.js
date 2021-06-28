import data from "../data";
import { makeAutoObservable } from "mobx";

class MovieStore {
  data = data;

  constructor() {
    //when data is updated the components will be rerendered
    makeAutoObservable(this);
  }
  deleteMovie = (dataId) => {
    const updateMovie = this.data.filter((data) => data.id !== dataId);
    this.data = updateMovie;
    console.log(this.deleteMovie);
  };

  updateMovie = (updateMovie) => {
    const movie = this.movie.find((movie) => movie.id === updateMovie.id);
    movie.watch = updateMovie.watch;
  };

  addMovie = (newMovie) => {
    this.data.push({
      name: newMovie,
      id: this.data.length + 1,
      watched: false,
    });
    console.log(this.data);
  };
}

const movieStore = new MovieStore();
export default movieStore;
