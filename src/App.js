import "./App.css";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import { Header } from "./components/Header";
import AddMovieButton from "./components/buttons/AddMovieButton";
// import { Switch, Route } from "react-router-dom";

// import { GlobalStyle } from "./Styles";
// import { ThemeProvider } from "styled-components";

// const theme = {
//   light: {
//     mainColor: "#006d77",
//     backgroundColor: "#83c5be",
//     red: "red",
//   },
//   dark: {
//     mainColor: "#83c5be",
//     backgroundColor: "#006d77",
//     red: "red",
//   },
// };

function App(props) {
  // const [currentTheme, setCurrentTheme] = useState("light");
  // //detail
  // const [movie, setMovie] = useState(null);

  // const toggleTheme = () => {
  //   if (currentTheme === "light") setCurrentTheme("dark");
  //   else setCurrentTheme("light");
  // }

  const watch = props.watch;

  //we make props.watch to see if true or false
  return (
    //   <ThemeProvider theme={theme}>
    //     <GlobalStyle />
    //   </ThemeProvider>

    <div>
      <Header />
      <AddMovieButton />
      {watch ? true : false}
      {watch}
      <MovieList />
      <WatchedList />
    </div>
  );
}

export default App;
