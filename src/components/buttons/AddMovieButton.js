import movieStore from "../../stores/movieStore";
import { AddButtonStyled } from "../../Styles";

const AddMovieButton = (props) => {
  const handleAdd = () => {
    movieStore.addMovie(props.newMovie);
  };
  return (
    <div>
      <AddButtonStyled onClick={handleAdd}>Add Movie</AddButtonStyled>
    </div>
  );
};

export default AddMovieButton;
