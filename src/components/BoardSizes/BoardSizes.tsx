import React from 'react'
import { BoardSizeTypes } from '../../types'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import './board-sizes.css'

const BoardSizes: React.FC<BoardSizeTypes> = ({selectSizeFn}) => {
  return (
    <div className='boardsizes__container'>
      <h2>How many pairs you would like to find?</h2>
      <div className='boardsizes__buttons'>
        {[3, 6, 10].map((size, idx) => <PrimaryButton key={idx} caption={`${size} pairs`} confirm={() => selectSizeFn(size)}/>)}
      </div>
    </div>
  )
}

export default BoardSizes
