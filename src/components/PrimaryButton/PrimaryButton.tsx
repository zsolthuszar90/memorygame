import React from 'react'
import { PrimaryBtn } from '../../types'

import './primary-button.css'

const PrimaryButton: React.FC<PrimaryBtn> = ({caption, confirm, fullWidth}) => {
  return (
    <button onClick={confirm} className='primary-button' style={{width: fullWidth ? '100%' : 'auto'}}>
      <div>{caption}</div>
    </button>
  )
}

export default PrimaryButton