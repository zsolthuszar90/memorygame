import React from 'react'
import { CardType } from '../../types'
import catpaw from '../../assets/cat-paw.svg'

import './card.css'

const Card: React.FC<CardType> = ({id, idx, imgUrl, helper, imageClick}) => {
  return (
    <div
      className={`card__img-wrapper ${helper.flipDisabled(id)} ${!helper.catHidden(idx, id) ? 'click-disabled' : ''}`} 
      onClick={imageClick}>
      <div className={`card__img-cover ${helper.catHidden(idx, id) ? 'show' : 'hide'}`}><img src={catpaw} alt='catpaw'/></div>
      <img className={`card__img ${helper.catHidden(idx, id) ? 'hide' : 'show'}`} src={imgUrl} alt={id}/>
  </div>
  )
}

export default Card