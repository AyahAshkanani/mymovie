import movieStore from "../../stores/movieStore";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
    const handleDelete = () => {
        movieStore.handleDelete(props.movieId);
    };
    return (
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    );
};

export default DeleteButton;