import { ERROR } from "./constants"

export const validatePlayers = (players: string[]) => {
  let result = null

  // Check for duplicated names
  if(players.some((val, i) => players.indexOf(val) !== i)) {
    result = ERROR.SAME_NAMES
  }

  // Check for empty name(s)
  players.filter(player => {
    if(player.length === 0) {
      result = players.length > 1 ? ERROR.EMPTY_NAMES : ERROR.EMPTY_NAME
    }
  })

  return result
}