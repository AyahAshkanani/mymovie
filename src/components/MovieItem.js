import { MovieWrapper } from "../Styles";
import { observer } from "mobx-react";
//buttons
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const MovieItem = (props) => {
  return (
    <MovieWrapper>
      <p>{props.data.name}</p>
      <DeleteButton dataId={props.data.id} />
      <UpdateButton data={props.data} />
      {/* <StatusButton data = {props.data}/> */}
    </MovieWrapper>
  );
};

export default observer(MovieItem);
