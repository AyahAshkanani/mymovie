import { SearchBarStyled } from "../Styles";

const SearchBar = () => {
  return (
    <SearchBarStyled
      placeholder="search by movie name"
      onChange={(event) => event.target.value}
    />
  );
};

export default SearchBar;
