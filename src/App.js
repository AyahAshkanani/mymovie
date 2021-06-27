
import "./App.css";
import MovieList from "./components/MovieList";

function App(props) {
  const watch = props.watch;

//we make props.watch to see if true or false
  return (
    <div>
    {watch? true : false}

      <MovieList />
      {watch}
    </div>
  );
}

export default App;
