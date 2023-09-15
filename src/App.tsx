import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css'

import Home from './containers/Home/Home';
import About from './containers/About/About';
import ScoreBoard from './containers/ScoreBoard/ScoreBoard';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import { PAGES } from './utils/constants';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Routes>
        <Route path={PAGES.HOME.PATH} element={<Home/>}/>
        <Route path={PAGES.ABOUT.PATH} element={<About/>}/>
        <Route path={PAGES.SCOREBOARD.PATH} element={<ScoreBoard/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
