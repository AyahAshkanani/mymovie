import './App.css';
// components

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//use state
import { useState } from "react";

//Libraries
import { Route, Switch } from "react-router";

const theme = {
  light: {
    mainColor: "#006d77",
    backgroundColor: "#83c5be",
    red: "red",
  },
  dark: {
    mainColor: "#83c5be",
    backgroundColor: "#006d77",
    red: "red",
  },
};

function App() {

  const [currentTheme, setCurrentTheme] = useState("light");
  //detail
  const [cake, setCake] = useState(null);

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  }
  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/menu/:cakeSlug">
            <CakeDetail setCake={setCake} />
          </Route>
          <Route path="/menu">
            <CakeList setCake={setCake} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}
export default App;