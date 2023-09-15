import React from 'react'
import catpaw from '../../assets/cat-paw.svg'
import './loading.css'

const Loading = () => {
  return (
    <div className='loading__container'>
      <img src={catpaw} alt='catpaw' className='loading__catpaw'/>
    </div>
  )
}

export default Loading