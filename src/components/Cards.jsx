import './Cards.css'
import { useState, useEffect } from 'react';

function Cards() {

    const link = 'https://pokeapi.co/api/v2/pokemon/'

    const [pokemonList, setPokemonList] = useState(["ditto", "charizard", "squirtle", "pikachu", "magnemite", "arbok", "venusaur", "machamp", "zapdos", "mewtwo"])

    const [image, setImage] = useState(null);

    async function getImage(pokemon) {
        try {
            const res = await fetch(link+pokemon);
            const json = await res.json();
            setImage(json.sprites.other['official-artwork'].front_default);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getImage("mew")
    }, [])

    return (
        <>
            {image ? <img src={image}/> : "Loading"}
        </>
    )
}

export default Cards;