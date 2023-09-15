import React from 'react'
import { PlayerTypes } from '../../types'
import './player.css'

const Player: React.FC<PlayerTypes> = ({name, index, singlePlayer, nameChange, removePlayer}) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameChange(e.target.value.toString(), index)
  }
  
  return (
    <div className='player__container'>
      <div>
        <h4>Player {index + 1}</h4>
        <input placeholder='Enter name...' onChange={(e) => handleChange(e)} value={name}></input>
      </div>
      {!singlePlayer && <div className='player__remove' onClick={() => removePlayer(index)}>❌</div>}
    </div>
  )
}

export default Player