// Store
import movieStore from "../stores/movieStore";


// State
import { useState } from "react";

//components
import MovieItem from "./MovieItem";


const WatchedList = () => {

    //data.watched===props.watch to check if true or false so i only need one. props.watch will be in app
const Watched = movieStore.data.filter(
    (data) => data.watched === true).map((data)=> {
      return ( 
    <MovieItem key={data.id} data={data} /> 
    )});

  return (
    <div>
      <h1>Watched</h1>
      {Watched}
            
    </div>
  );
};
export default WatchedList;