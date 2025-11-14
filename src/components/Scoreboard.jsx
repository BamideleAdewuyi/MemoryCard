import './Scoreboard.css'

function Scoreboard({currentScore, highScore}) {
    return(
        <div className='scoreboard'>
            <h3 className='highScore'>High score: {highScore}</h3>
            <h3>Current score: {currentScore}</h3>
        </div>
    )
    
}

export default Scoreboard