import { FunctionComponent } from "preact";
import { Character } from "../types.ts";

type Props = {
    character: Character
}

const CharacterDetail: FunctionComponent<Props> = (props) => {
    const {character} = props
    return (
        <div class="detail">
            <h2>{character.fullName}</h2>
            <img src={character.imageUrl} alt={character.fullName}/>
            <p>House: {character.family}</p>
            <p>{character.title}</p>
        </div>
    )
}

export default CharacterDetail