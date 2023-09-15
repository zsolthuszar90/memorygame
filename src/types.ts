export type BoardSizeTypes = {
  selectSizeFn: (e: number) => void
}

export type GameTypes = {
  size: number,
  players: string[]
}

export type PlayerTypes = {
  name: string,
  singlePlayer: boolean,
  index: number,
  nameChange: (name: string, idx: number) => void,
  removePlayer: (idx: number) => void
}

export type PlayersTypes = {
  selectPlayersFn: (e: string[]) => void
}

export type CatResponse = {
  height?: number,
  width?: number
  id: string,
  url: string,
}

export type FlippedCard = {
  id: string,
  index: number
}

export type Times = {
  timeString: string, 
  timeNumber: number
}

export type TimesFn = (t: string, n: number) => void

export type InGameTypes = {
  players: string[],
  currentPlayer: string,
  pairsMax: number,
  pairsFound: number,
  timer: TimesFn,
  currentRoundResult: number
}

export type Score = {
  name: string,
  score: number
}

export type GameoverTypes = {
  scores: Score[],
  players: string[],
  times: Times,
  size: number,
  restart: () => void
}

export type PrimaryBtn = {
  caption: string,
  confirm: () => void
  fullWidth?: boolean
}

export type Ranking = {
  name: string,
  timeNumber: number,
  size: number
  timeString: string
}

export type StopwatchType = {
  isRunning: boolean,
  timesFn: TimesFn
}

export type RankPlayer = {
  rank: string,
  name: string,
  time: string,
  size: number
}

export type ConfirmModalType = {
  cancel: () => void,
  confirm: () => void,
  caption: string
}

export type CardHelper = {
  matchesRef: string[], 
  flippedCards: FlippedCard[]
}

export type CardType = {
  id: string,
  idx: number,
  imgUrl: string
  helper: any, // TODO
  imageClick: () => void
}