import { MovieWrapper } from "../Styles";
import { observer } from "mobx-react";
//buttons
import DeleteButton from "./buttons/DeleteButton";

const MovieItem = (props) => {
  return (
    <MovieWrapper>
      <p>{props.data.name}</p>
      <DeleteButton dataId={props.data.id} />
      {/* <StatusButton data = {props.data}/> */}
    </MovieWrapper>
  );
};

export default observer(MovieItem);