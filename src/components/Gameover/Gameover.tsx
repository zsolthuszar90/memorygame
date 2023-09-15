import React from 'react'
import { GameoverTypes } from '../../types'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

import './gameover.css'

const Gameover: React.FC<GameoverTypes> = ({scores, players, times, size, restart}) => {

  const singlePlayer = players.length === 1
  if(singlePlayer) {
    const rankings = localStorage?.rankings ? JSON.parse(localStorage.rankings) : []
    localStorage.setItem("rankings", JSON.stringify(
      [   ...rankings, 
        { name: scores[0].name, 
          timeNumber: times.timeNumber, 
          timeString: times.timeString, 
          size: size + ' pairs' 
        }
      ]
    ))
  }

  return (
    <div className='gameover__container'>
      <p className='gameover__title'>Nice! All pairs found!</p>
      {singlePlayer ? 
      <div className='gameover__scoreboard'>
        {`You have finished in ${times.timeString}. Check the scoreboard!`}
      </div>
      :
      <div className='gameover__ranking'>
        {scores.sort((a,b) => b.score - a.score).map((player, idx) => <p key={idx}>{`${idx + 1}. ${player.name} found ${player.score} pairs`}</p>)}
      </div>}
      <PrimaryButton caption='Play again' confirm={restart}/>
    </div>
  )
}

export default Gameover