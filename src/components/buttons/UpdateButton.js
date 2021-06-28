import movieStore from "../../stores/movieStore";
import { UpdateButtonStyled } from "../../Styles";

const UpdateButton = (props) => {
  const handleUpdate = () => {
    movieStore.updateMovie(props.data);
  };
  return (
    <div>
      {/* in watched list unwatch button and in watchlist watched button */}
      <UpdateButtonStyled onClick={handleUpdate}>
        {props.data.watched ? "Unwatch" : "Watched"}
      </UpdateButtonStyled>
    </div>
  );
};

export default UpdateButton;
