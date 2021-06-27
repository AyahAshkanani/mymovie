import MovieItem from "./MovieItem";
import data from "../data";
import { Title } from "../Styles";

const MovieList = () => {
  const movieList = data.map((data) => <MovieItem data={data} />);
  return (
    <div>
      <Title>Movies List</Title>
      {movieList}
    </div>
  );
};
export default MovieList;
