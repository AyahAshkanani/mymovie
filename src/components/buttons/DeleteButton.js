import movieStore from "../../stores/movieStore";
import { DeleteButtonStyled } from "../../Styles";

const DeleteButton = (props) => {
    const handleDelete = () => {
        movieStore.handleDelete(props.dataId);
    };
    return (
        <DeleteButtonStyled onClick={handleDelete}>Move</DeleteButtonStyled>
    );
};

export default DeleteButton;