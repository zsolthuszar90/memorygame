import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { PAGES } from '../../utils/constants'

const NotFound = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '30px'}}> 
            <h1>Something went wrong :(</h1>
            <Link to={PAGES.HOME.PATH}>
                <h2 style={{color: 'black', textAlign: 'center'}}>Let's go to the homepage</h2>
            </Link>
        </div>
    )
}

export default NotFound