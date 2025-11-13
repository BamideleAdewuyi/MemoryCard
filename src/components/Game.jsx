import './Game.css'
import Grid from './Grid';
import Scoreboard from './Scoreboard';
import { useState } from 'react';

function Game() {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [guessed, setGuessed] = useState([]);

    function updateScores(name) {
        if (!guessed.includes(name)) {
            setGuessed([...guessed, name])
            setCurrentScore(currentScore + 1)
        } else {
            if (currentScore > highScore) {
                setHighScore(currentScore)
                setCurrentScore(0)
                setGuessed([])
            }
        }
    }

    return (
        <>
        <div className='heading'>
        <h1>POKEMON MEMORY BANK</h1>
        <h2>Get points by clicking on an image but don't click on any more than once!</h2>
        </div>
        <Scoreboard
        currentScore={currentScore}
        highScore={highScore}/>
        <Grid
        stateFunction={updateScores}
        state={currentScore}/>
        </>
    )
}

export default Game;