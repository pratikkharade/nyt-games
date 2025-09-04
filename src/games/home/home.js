import React, { useState } from 'react';
import './home.css';
import MiniCrossword from '../mini_crossword/home';
import Connections from '../Connections/Connections';
import SpellingBee from '../SpellingBee/SpellingBee';
import Wordle from '../Wordle/Wordle';

function HomePage(props) {
    const [tabIdx, setTabIdx] = useState(null);

    return (
        <div className='home-page-container'>
            <div className='home-page-tabs-wrapper'>
                <div className='home-page-tabs-header'>
                    <div className={`home-page-tabs ${tabIdx == 0 ? "selected" : ""}`} onClick={e => setTabIdx(0)}>Mini Crossword</div>
                    <div className={`home-page-tabs ${tabIdx == 1 ? "selected" : ""}`} onClick={e => setTabIdx(1)}>Connections</div>
                    <div className={`home-page-tabs ${tabIdx == 2 ? "selected" : ""}`} onClick={e => setTabIdx(2)}>Spelling Bee</div>
                    <div className={`home-page-tabs ${tabIdx == 3 ? "selected" : ""}`} onClick={e => setTabIdx(3)}>Wordle</div>
                </div>
                <div className='home-page-tabs-container'>
                    {tabIdx === null && <div className='home-container'>Pick a game to play!</div>}
                    {tabIdx == 0 && <MiniCrossword />}
                    {tabIdx == 1 && <Connections />}
                    {tabIdx == 2 && <SpellingBee />}
                    {tabIdx == 3 && <Wordle />}
                </div>
            </div>
        </div>
    )
}

export default HomePage;