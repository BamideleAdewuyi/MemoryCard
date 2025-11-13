import './Game.css'
import Grid from './Grid';
import Scoreboard from './Scoreboard';
import { useState } from 'react';

function Game() {
    return (
        <>
        <Scoreboard/>
        <Grid/>
        </>
    )
}

export default Game;