import { FlippedCard } from "../types"

export const cardHelper = (matchesRef: string[], flippedCards: FlippedCard[]) => {
  const match = (id: string) => matchesRef?.includes(id)
  const flipDisabled = (id: string) => flippedCards.length === 2 || match(id) ? 'flip-disabled' : ''
  const catHidden = (idx: number, id: string) => !flippedCards.filter(v => idx === v.index).length && !match(id)

  return { match, flipDisabled, catHidden }

}