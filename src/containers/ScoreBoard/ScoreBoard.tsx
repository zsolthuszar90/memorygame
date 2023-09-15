import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { Ranking, RankPlayer } from '../../types';
import { PAGES } from '../../utils/constants';

import './scoreboard.css'

const ScoreBoard = () => {
  const navigate = useNavigate()
  const [rankings, setRankings] = useState<string | null>(localStorage?.rankings ? localStorage.rankings : null)
  const [confirmModal, setConfirmModal] = useState<boolean>(false)

  const onClearBoard = () => {
    localStorage.removeItem('rankings')
    setRankings(null)
    setConfirmModal(false)
  }

  return (
    <div className='scoreboard__container'>
      {confirmModal && <ConfirmModal cancel={() => setConfirmModal(false)} confirm={onClearBoard} caption='Are you sure?'/>}
      {rankings 
      ? 
      <div className='scoreboard__table-wrapper'>
        <h4>For single player only</h4>
        <table>
          <tbody>
            <tr>
              {['Rank', 'Name', 'Time', 'Size'].map((title, idx) => <th key={idx}>{title}</th>)}
            </tr>
            {JSON.parse(rankings).sort((a: Ranking, b: Ranking) => a.timeNumber - b.timeNumber).map((player: Ranking, idx: number) => {
              const player_: RankPlayer | any = {
                rank: (idx + 1) + '.',
                name: player.name,
                time: player.timeString,
                size: player.size
              }
              return <tr key={idx}>
                {Object.keys(player_).map((data, idx_) => <td key={idx_}>{player_[data]}</td>)}
              </tr>}
            )}
          </tbody>
        </table>
      </div> 
      : 
      <p className='scoreboard__empty-text'>No scores yet. Complete a single player game to be on the board!</p>}

      <PrimaryButton caption='Start now' confirm={() => navigate(PAGES.HOME.PATH)}/>
      {rankings && <div className='scoreboard__clear' onClick={() => setConfirmModal(true)}>clear board</div>}
    </div>
  );
}

export default ScoreBoard;