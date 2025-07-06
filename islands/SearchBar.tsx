import { searchTerm } from "../utils/charactersSignal.ts";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Buscar personaje..."
      onInput={(e) => searchTerm.value = e.currentTarget.value}
      class="searchbar"
    />
  );
};

export default SearchBar;