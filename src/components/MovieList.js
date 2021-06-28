import MovieItem from "./MovieItem";
import data from "../data";
import movieStore from "../stores/movieStore";
import SearchBar from "./SearchBar";

// import { Table, Badge } from "react-bootstrap";
// import SearchBar from "./SearchBar";
//show the movies i've watched seperatly
//show movies i haven't watched seperatly
//use props to pass data
//check watched === true print watched
//check watched === false print watch

const MovieList = (props) => {
  //data.watched===props.watch to check if true or false so i only need one. props.watch will be in app
  const Movies = movieStore.data
    .filter((data) => data.watched === false)
    .map((data) => {
      return <MovieItem key={data.id} data={data} />;
    });

  return (
    <div>
      <h1>To Watch</h1>
      <SearchBar />
      {Movies}
    </div>
  );
};
export default MovieList;
