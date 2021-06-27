
import { MovieWrapper } from "../Styles";
import { observer } from "mobx-react";

const MovieItem = (props) => {
    return (
        <MovieWrapper>
            <p>{props.data}</p>
        </MovieWrapper>
    )

};




export default observer(MovieItem);