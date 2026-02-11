import { emojiList } from "@/data/emojiList"

interface Prop {
    nota: number
}

export const Rating = ({nota}: Prop) => {
    nota > 5 ? nota = 5 : nota
    nota < 0 ? nota = 0 : nota
 
    const rateInt = Math.floor(nota)
    const stars =  emojiList[nota - 1].repeat(rateInt)

    return (
        <div className="flex items-center text-6xl text-white">
            <div>{nota.toFixed(1)}</div>
            <div className="ml-3">{stars}</div>
        </div>
    )
}