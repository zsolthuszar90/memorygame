import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PAGES } from '../../utils/constants'
import catpaw from '../../assets/cat-paw.svg'

import './Header.css'

const Header = () => {
    const [ pawVisible, setPawVisible ] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
      setTimeout(() => {
        setPawVisible(true)
      }, 500)
    }, [])

    const onLogoClick = () => {
      setPawVisible(false)
      setTimeout(() => {
        setPawVisible(true)
      }, 200)
    }
  
    const pages = [
      {title: PAGES.HOME.TITLE, path: PAGES.HOME.PATH},
      {title: PAGES.SCOREBOARD.TITLE, path: PAGES.SCOREBOARD.PATH},
      {title: PAGES.ABOUT.TITLE, path: PAGES.ABOUT.PATH},
    ]

    return (
        <div className='header__container'>
          <div className='header__title' onClick={onLogoClick}>
            <h1>Memo Paws</h1>
            <img src={catpaw} alt='catpaw' className={`header__img ${pawVisible ? 'paw-visible' : ''}`}/>
          </div>
          {pages.map(({path, title}, idx) => 
            <Link 
              key={idx} 
              to={path}
              className={location.pathname === path ? 'active' : undefined}
              onClick={() => location.pathname === path && navigate(0)}
              >{title}
            </Link>
            )}
        </div>
    )
}

export default Header