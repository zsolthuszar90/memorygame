import React, { useState } from 'react'
import { PlayersTypes } from '../../types'
import { MAX_PLAYERS } from '../../utils/constants'
import { validatePlayers } from '../../utils/validation'
import Player from '../Player/Player'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

import './players.css'

const Players: React.FC<PlayersTypes> = ({selectPlayersFn}) => {
  const [ players, setPlayers ] = useState<string[]>([''])
  const [ error, setError ] = useState<string | null>(null)

  const onAddNewPlayer = () => {
    setPlayers(prev => {
      return [...prev, '']
    })
  }

  const onRemovePlayer = (idx: number) => {
    setError(null)
    setPlayers(prev => {
      const arr_ = [...prev]
      arr_.splice(idx, 1)
      return arr_
    })
  }

  const onNameChange = (name: string, idx: number) => {
    setError(null)
    setPlayers(prev => {
      const arr_ = [...prev]
      arr_[idx] = name
      return arr_
    })
  }

  const onStartGame = () => {
    const validationFail = validatePlayers(players)
    validationFail ? setError(validationFail) : selectPlayersFn(players)
  }

  return (
    <div className='players__container'>
      <h2>Add players</h2>
      {players.map((name, idx) => 
        <Player 
          key={idx} 
          index={idx} 
          name={name} 
          singlePlayer={players.length === 1}
          nameChange={onNameChange}
          removePlayer={onRemovePlayer}
        />    
      )}
      <div 
        className={`players__add-new ${players.length >= MAX_PLAYERS ? 'disabled' : ''}`} 
        onClick={onAddNewPlayer}>
          ⊕ Add new player
      </div>
      <PrimaryButton caption='Start game' confirm={onStartGame} fullWidth={true}/>
      {error && <div className='players__error'>{error}</div>}
    </div>

  )
}

export default Players