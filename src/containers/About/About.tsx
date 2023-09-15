import React from 'react'
import { useNavigate } from 'react-router'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import { PAGES } from '../../utils/constants'
import './about.css'

const About = () => {
    const navigate = useNavigate()
    return (
        <div className='about__container'>
            <h1>How to play?</h1>
            <p>1. Select a board size</p>
            <p>2. Add 1-4 player(s)</p>
            <p>3. Find all furry pairs</p>
            <p>4. Beat the scoreboard</p>
            <PrimaryButton caption='Start now' confirm={() => navigate(PAGES.HOME.PATH)}/>
        </div>
    )
}

export default About