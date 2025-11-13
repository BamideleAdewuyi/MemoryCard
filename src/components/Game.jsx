import './Game.css'
import Grid from './Grid';
import Scoreboard from './Scoreboard';
import { useState } from 'react';

function Game() {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    return (
        <>
        <Scoreboard
        currentScore={currentScore}
        highScore={highScore}/>
        <Grid/>
        </>
    )
}

export default Game;