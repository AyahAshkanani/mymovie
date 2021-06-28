import movieStore from "../../stores/movieStore";
import { DeleteButtonStyled } from "../../Styles";

const DeleteButton = (props) => {
  const deleteMovie = () => {
    movieStore.deleteMovie(props.dataId);
  };
  return (
    <DeleteButtonStyled onClick={deleteMovie}> Delete </DeleteButtonStyled>
  );
};

export default DeleteButton;
