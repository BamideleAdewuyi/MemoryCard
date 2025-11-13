import './Card.css'

function Card({name, url, stateFunction, state}) {
    return(
        <div className='pokemonCard'>
            <img src={url} alt={name} className='pokemonImage'/>
            <h4 className='imageLabel'>{name}</h4>
        </div>
    );
};

export default Card;