import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharactersContainer from "../islands/CharactersContainer.tsx";
import { Character } from "../types.ts";
import axios from "axios"

interface Data {
  characters: Character[]
}

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = "https://thronesapi.com/api/v2/Characters"
    try {
      const response = await axios.get<Character[]>(url)
      return ctx.render({characters: response.data});
    }catch (e) {
      return new Response("Error fetching data")
    }
  }
}

export default (props: PageProps<Data>) => (
  <CharactersContainer characters={props.data.characters}/>
)