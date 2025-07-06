import { FunctionComponent } from "preact";
import { Character } from "../types.ts";
import StarButton from "../islands/StarButton.tsx";

type Props = {
    character: Character;
    favorite: boolean
}

const CharacterDetail: FunctionComponent<Props> = (props) => {
    const {character, favorite} = props
    return (
        <div class="detail">
            <h2>{character.fullName}</h2>
            <img src={character.imageUrl} alt={character.fullName}/>
            <p>House: {character.family}</p>
            <p>{character.title}</p>
            <StarButton id={character.id} initial={favorite}/>
            <a href="/">Volver</a>
        </div>
    )
}

export default CharacterDetail