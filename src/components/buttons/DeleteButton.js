import movieStore from "../../stores/movieStore";
import { DeleteButtonStyled } from "../../Styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    movieStore.deleteMovie(props.dataId);
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}> Delete </DeleteButtonStyled>
  );
};

export default DeleteButton;
