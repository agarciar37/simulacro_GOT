import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";

interface Props {
    id: string;
    initial: boolean
}

const StarButton: FunctionComponent<Props> = (props) => {
    const { id, initial} = props
    const fav = useSignal(initial)

    const toggle = () => {
        fav.value = !fav.value
        const cookie = Object.fromEntries(
            document.cookie.split("; ").map((c) => c.split("="))
        )
        let list: string[] = []
        if (cookie.favorites) {
            try {
                list = JSON.parse(decodeURIComponent(cookie.favorites))
            } catch {

            }
        }
        if (fav.value) {
            if (!list.includes(id)) list.push(id)
        } else {
            list = list.filter((x) => x !== id)
        }
        document.cookie = `favorites=${encodeURIComponent(JSON.stringify(list))}; Path=/`
    }

    return (
    <span class={fav.value ? "star fav" : "star"} onClick={toggle}>
      ★
    </span>
  );
}

export default StarButton