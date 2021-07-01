// Store
import movieStore from "../stores/movieStore";

// State
import { useState } from "react";

//components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";

const WatchedList = () => {
  const [query,setQuery] = useState("");
  //data.watched===props.watch to check if true or false so i only need one. props.watch will be in app
  const Watched = movieStore.data
    .filter((data) => data.watched === true)

    const names= Watched.filter((data)=>data.name.includes(query))
    .map((data) => {
      return <MovieItem key={data.id} data={data} />
    });
    
  return (
    <div>
      <h1>Watched</h1>
      <h4>
      { Watched.length === names.length ? `${Watched.length}`:`${names.length} out of ${Watched.length}`}
</h4>
      <SearchBar setQuery={setQuery}/>
      {names}
      
    </div>
  );
};
export default observer(WatchedList);
