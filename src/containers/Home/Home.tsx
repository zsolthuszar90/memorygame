import React, { useRef, useState } from 'react'
import Game from '../../components/Game/Game';
import BoardSizes from '../../components/BoardSizes/BoardSizes';
import Players from '../../components/Players/Players';
import { GAMESTEPS } from '../../utils/constants';
import "./home.css"

const Home: React.FC<{}> = () => {

  const [gamestep, setGamestep] = useState<number>(GAMESTEPS.BOARDSIZE)
  const playersRef = useRef<string[]>([])
  const boardSizeRef = useRef<number>(0)

  const onSelectSize = (size: number) => {
    boardSizeRef.current = (size)
    setGamestep(GAMESTEPS.PLAYERS)
  }

  const onSelectPlayers = (players: string[]) => {
    playersRef.current = players
    setGamestep(GAMESTEPS.GAME)
  }

  const backButton = {
    [GAMESTEPS.BOARDSIZE]: null,
    [GAMESTEPS.PLAYERS]: '◁ Back',
    [GAMESTEPS.GAME]: '↺ From scratch'
  }[gamestep]

  const component = {
    [GAMESTEPS.BOARDSIZE]: <BoardSizes selectSizeFn={onSelectSize}/>,
    [GAMESTEPS.PLAYERS]: <Players selectPlayersFn={onSelectPlayers}/>,
    [GAMESTEPS.GAME]: <Game size={boardSizeRef.current} players={playersRef.current}/>
  }[gamestep]

  return (
    <div className='home__container'>
      {backButton && <div className='home__back' onClick={() => setGamestep(0)}>{backButton}</div>}
      {component}
    </div>
  );
}

export default Home;