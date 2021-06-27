import { MovieWrapper } from "../Styles";
import { observer, PropTypes } from "mobx-react";

const MovieItem = (props) => {
  return (
    <MovieWrapper>
      <p>{props.data.name}</p>
    </MovieWrapper>
  );
};

export default observer(MovieItem);
