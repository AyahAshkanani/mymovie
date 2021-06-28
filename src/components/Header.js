import React from "react";
import { Title, Detail } from "../Styles";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <Title>Movies</Title>
        <Detail>
          A list showing the movies we want to watch and the movies we've
          watched
        </Detail>
      </div>
    </header>
  );
};
