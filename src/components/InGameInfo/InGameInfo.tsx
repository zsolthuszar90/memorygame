import React, { useEffect, useRef, useState } from 'react'
import { InGameTypes } from '../../types'
import Stopwatch from '../Stopwatch/Stopwatch'

import './ingame-info.css'

const InGameInfo: React.FC<InGameTypes> = ({players, currentPlayer, pairsMax, pairsFound, timer, currentRoundResult}) => {

  const lastRoundResult = useRef<number>(0)
  const [showIcon, setShowIcon] = useState<boolean>(false)
  const isSingle = players.length === 1

  useEffect(() => {
    if(!isSingle) {
      setShowIcon(lastRoundResult.current > currentRoundResult)
      lastRoundResult.current = currentRoundResult
    }
  }, [currentRoundResult])

  useEffect(() => {
    if(showIcon && !isSingle) {
      setTimeout(() => setShowIcon(false), 1000)
    }
  }, [showIcon])

  
  return (
    <div className='ingame-info__container'>
      {showIcon && <div className='ingame-info__next-player'>❌</div>}
      {isSingle ? <h1>Go!</h1> : <p className='ingame-info__player'>{`${currentPlayer}'s turn`}</p>}
      <div className='ingame-info__data'>
        <div>
          <p className='ingame-info__subtitle'>{isSingle ? 'Your time' : 'Overall time'}</p>
          <Stopwatch isRunning={Boolean(pairsMax-pairsFound)} timesFn={timer}/>
        </div>
        <div>
          <p className='ingame-info__subtitle'>Pairs left</p>
          <p>{`${pairsMax-pairsFound}`}</p>
        </div>
      </div>
    </div>
  )
}

export default InGameInfo