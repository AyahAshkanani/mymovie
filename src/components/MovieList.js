import MovieItem from "./MovieItem";
import { useState } from "react";
import { ListWrapper } from "../styles";

const MovieList = () => {
    const [query, setQuery] = useState("");

    const movieList = data.map((data) => (
        <MovieItem data={data} key={data.name} />
    ))
    return (

        <SearchBar setQuery={setQuery} />
        <ListWrapper>{movieList}</ListWrapper>
    );


};
export default MovieList;