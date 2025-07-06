import { FunctionComponent } from "preact";
import { Character } from "../types.ts";
import StarButton from "../islands/StarButton.tsx";

type Props = {
    character: Character;
    favorite: boolean
}

const CharacterCard: FunctionComponent<Props> = (props) => {
    const {character, favorite} = props
    return (
        <div class="card" >
            <a href={`/character/${character.id}`}>
                <img src={character.imageUrl} alt={character.fullName}/>
                <h2>
                    <p>{character.fullName}</p>
                </h2>
            </a>
            <StarButton id={character.id} initial={favorite}/>
        </div>
    )
}

export default CharacterCard;