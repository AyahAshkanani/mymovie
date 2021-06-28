import "./App.css";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import { Header } from "./components/Header";
import AddMovieButton from "./components/buttons/AddMovieButton";

function App(props) {


  const watch = props.watch;


  return (
  

    <div>
      <Header />
      <AddMovieButton newMovie={props.data}  />
      
      {watch ? true : false}
      {watch}
      <MovieList />
      <WatchedList />
    </div>
  );
}

export default App;
