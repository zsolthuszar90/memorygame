import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../customHooks/useFetch'
import { CatResponse, FlippedCard, GameTypes, Score, Times } from '../../types'
import Loading from '../Loading/Loading'
import { imagesRandomizer } from '../../utils/imagesRandomizer'
import { cardHelper } from '../../utils/cardHelper'

import './game.css'
import InGameInfo from '../InGameInfo/InGameInfo'
import Gameover from '../Gameover/Gameover'
import Card from '../Card/Card'

const Game: React.FC<GameTypes> = ({size, players}) => {
  const {data, loading, error} = useFetch(`https://api.thecatapi.com/v1/images/search?limit=${size?.toString()}`)

  const [ cats, setCats ] = useState<CatResponse[] | null>(null)
  const [ flippedCards, setFlippedCards ] = useState<FlippedCard[]>([])
  const [ currentPlayer, setCurrentPlayer ] = useState<string>(players[0])
  // no rerender needed, useRef is enough
  const matchesRef = useRef<string[]>([])
  const [roundResult, setRoundResult] = useState<number>(0)
  const timesUsed = useRef<Times>({timeString: '', timeNumber: 0})
  const scoresRef = useRef<Score[]>(players.map(p => ({name: p, score: 0})))

  useEffect(() => {
    data && setCats(imagesRandomizer(data, size))
  }, [data, size])

  useEffect(() => {
    error && setCats(null)
  }, [error])

  const onImageClick = (id: string, index: number) => {
    //flip card
    setFlippedCards(prev => [...prev, {id, index}])
    // if 1 card already flipped, check if match 
    if(flippedCards.length && flippedCards[0].id === id ) {
      const idxOfPlayer = scoresRef.current.findIndex(p => p.name === currentPlayer)
      setRoundResult(prev => prev + 1)
      scoresRef.current[idxOfPlayer].score += 1
      matchesRef.current?.push(id)
      setFlippedCards([])
    } else if (flippedCards.length) {
      // flip cards back if no match, go to next player
      setRoundResult(prev => prev - 1)
      setTimeout(() => {
        setCurrentPlayer(players[(players.indexOf(currentPlayer) + 1) % players.length])
        setFlippedCards([])
      }, 500)
    }
  }

  const onRestart = () => {
    setCurrentPlayer(players[0])
    setFlippedCards([])
    data && setCats(imagesRandomizer(data, size))
    matchesRef.current = []
    timesUsed.current = {timeString: '', timeNumber: 0}
    scoresRef.current = players.map(p => ({name: p, score: 0}))
  }

  const gameOver = matchesRef.current.length === size

  return (
    <div className='game__container'>
      {loading && <Loading/>}
      {error && <div>Oops, the cats escaped. Please try again later!</div>}
      {gameOver && <Gameover scores={scoresRef.current} players={players} times={timesUsed.current} size={size} restart={onRestart}/>}

      {!error && !loading && !gameOver && <div>
        <InGameInfo players={players} currentPlayer={currentPlayer} currentRoundResult={roundResult} pairsMax={size} pairsFound={matchesRef.current.length} timer={(timeString, timeNumber) => timesUsed.current = {timeString, timeNumber}}/>
        <div className='game__img-grid' style={{gridTemplateColumns: `repeat(${Math.floor(Math.sqrt(size*2))}, 1fr)`}}>
          {cats?.map(({url, id}, idx) =>
            <Card
              key={idx}
              helper={cardHelper(matchesRef.current, flippedCards)}
              id={id}
              imgUrl={url}
              idx={idx}
              imageClick={() => onImageClick(id, idx)}/>
            )}
        </div>
      </div>}
    </div>
  )
}

export default Game