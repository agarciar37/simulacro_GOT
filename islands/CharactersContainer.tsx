import { FunctionalComponent } from "preact";
import { Character } from "../types.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "./SearchBar.tsx";
import { searchTerm } from "../signals/charactersSignal.ts";
import { useComputed } from "@preact/signals";

type Props = {
  characters: Character[];
};

const CharactersContainer: FunctionalComponent<Props> = ({ characters }) => {
  // Lista filtrada que se actualiza automáticamente si searchTerm cambia
  const filteredCharacters = useComputed(() =>
    characters.filter((c) =>
      c.fullName.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  );

  return (
    <div class="container">
      <SearchBar />
      {filteredCharacters.value.length === 0 ? (
        <p>No se encontraron personajes.</p>
      ) : (
        filteredCharacters.value.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))
      )}
    </div>
  );
};

export default CharactersContainer;
