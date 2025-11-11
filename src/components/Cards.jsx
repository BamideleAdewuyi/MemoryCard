import './Cards.css'
import { useState, useEffect } from 'react';

function Cards() {

    const link = 'https://pokeapi.co/api/v2/pokemon/mewtwo'

    const pokemon = ["ditto", "charizard", "squirtle", "pikachu", "magnemite", "arbok", "venusaur", "machamp", "zapdos", "mewtwo"]

    const [data, setData] = useState(null);

    async function getImage() {
        try {
            const res = await fetch(link);
            const json = await res.json();
            setData(json.sprites.other['official-artwork'].front_default);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>

        </>
    )
}

export default Cards;