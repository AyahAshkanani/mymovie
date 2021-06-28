import data from "../data";
import { makeAutoObservable } from "mobx";


class MovieStore {
  data = data;

  constructor() {
    //when data is updated the components will be rerendered
    makeAutoObservable(this);
  }
  deleteMovie = (dataoneId) => {
    const updateMovies = this.data.filter((dataone) => dataone.id !== dataoneId);
    this.data = updateMovies;
   
  };
//watch and whatched button
  updateMovie = (movieUpdate) => {
    
    const movie = this.data.find((movie)=> movie.id === movieUpdate.id);
    movie.watched = !movie.watched;
  };

  addMovie = (newMovie) => {
    this.data.push({
      name: newMovie,
      id: this.data.length + 1,
      watched: false,
    });

  };

}

const movieStore = new MovieStore();
export default movieStore;
