//components
import movieStore from "../../stores/movieStore";
//styles
import { AddButtonStyled } from "../../Styles";
import { useState } from "react";

const AddMovieButton = () => {
  const [movie,setMovie] = useState("");

  const handleAdd = () => {

    movieStore.addMovie(movie);

  };

  const handleChange = (event) => {
    setMovie(event.target.value);

  }
  
  //update handle add method to use state

  return (
    <div>
   <div class="input-group mb-3">
    
    
  <AddButtonStyled class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={handleAdd}>
  Add Movie 
    </AddButtonStyled>
  <input type="text" class="form-control" placeholder="Add a new movie" aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={handleChange}/>
</div>
      


    </div>
  );
};

export default AddMovieButton;
