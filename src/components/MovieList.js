import MovieItem from "./MovieItem";
import data from "../data";
import { Title,List } from "../Styles";

//show the movies i've watched seperatly
//show movies i haven't watched seperatly
//use props to pass data
//check watched === true print watched
//check watched === false print watch

const MovieList = (props) => {
    //data.watched===props.watch to check if true or false so i only need one. props.watch will be in app

  const movieList = data.filter((data)=> data.watched=== props.watch).map((data) => <MovieItem data={data} />);

  
//   const movieListSeen = data.filter((data)=> data.watched===true).map((data) => <MovieItem data={data} />);
  return (
    <div>
      <Title>Movies List</Title>

      <List>{props.watched ? "Movies I've watched" : "Movies to watch"}</List>
      {movieList}
      {/* we want the button to show here */}
      {/* <List>{props.watched ? "Movies to watch" : "Movies I've watched"}</List> */}
      {/* {movieListSeen} */}
      
    </div>
  );
};
export default MovieList;