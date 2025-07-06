import { FunctionComponent } from "preact";
import { Character } from "../types.ts";

type Props = {
    character: Character
}

const CharacterCard: FunctionComponent<Props> = (props) => {
    const {character} = props
    return (
        <div class="card" >
            <a href={`/character/${character.id}`}>
                <img src={character.imageUrl} alt={character.fullName}/>
                <h2>
                    <p>{character.fullName}</p>
                </h2>
            </a>
        </div>
    )
}

export default CharacterCard;