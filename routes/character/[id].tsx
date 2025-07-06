import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import { Character } from "../../types.ts";
import CharacterDetail from "../../components/CharacterDetail.tsx";
import { getFavoritesCookie } from "../../utils/cookies.ts";

interface Data {
    character: Character;
    favorites: string[];
}

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const {id} = ctx.params;
        const url = `https://thronesapi.com/api/v2/Characters/${id}`
        try {
            const response = await axios.get<Character>(url)
            const favorites = getFavoritesCookie(req.headers.get("cookie"))
            return ctx.render({character: response.data, favorites})
        } catch (e) {
            return new Response ("Error fetching API")
        }
    }
}

export default (props: PageProps<Data>) => {
    const fav = props.data.favorites.includes(props.data.character.id)
    return <CharacterDetail character={props.data.character} favorite={fav}/>
}