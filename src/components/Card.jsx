import './Card.css'

function Card({name, url, stateFunction}) {
    return(
        <div className='pokemonCard' onClick={() => stateFunction(name)}>
            <img src={url} alt={name} className='pokemonImage'/>
            <h4 className='imageLabel'>{name}</h4>
        </div>
    );
};

export default Card;