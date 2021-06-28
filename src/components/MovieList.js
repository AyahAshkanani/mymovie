import MovieItem from "./MovieItem";
import movieStore from "../stores/movieStore";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import { useState } from "react";

const MovieList = () => {

  const [query,setQuery] = useState("");
  //data.watched===props.watch to check if true or false so i only need one. props.watch will be in app
 
    const Movies = movieStore.data
    .filter((data) => data.watched === false)

    const ToWatch= Movies.filter((data)=>data.name.includes(query))
    .map((data) => {
      return <MovieItem key={data.id} data={data} />
    });

  return (
    //if towatch===movies just show numbers 1
    //if towatch<movies show outof
    <div>
      <h1>To Watch</h1>
      <h4>
      
      {ToWatch.length} out of {Movies.length}
      </h4>
      <SearchBar setQuery={setQuery}/>
      {ToWatch}
    </div>
  );
};
export default observer(MovieList);
