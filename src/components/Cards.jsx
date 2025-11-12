import './Cards.css'
import { useState, useEffect } from 'react';

function Cards() {

    const link = 'https://pokeapi.co/api/v2/pokemon/'

    const [pokemonNames, setPokemonNames] = useState(["Ditto", "Charizard", "Squirtle", "Pikachu", "Magnemite", "Arbok", "Venusaur", "Machamp", "Zapdos", "Mewtwo"])

    const [pokemonImages, setPokemonImages] = useState([])
    const [image, setImage] = useState(null);

    async function getImages() {

      let images = []
      for (const pokemon of pokemonNames) {
        try {
            const res = await fetch(link+pokemon);
            const json = await res.json();
            images.push(json.sprites.other['official-artwork'].front_default)
        } catch (error) {
            console.error(error)
        }
      }
      
      setPokemonImages(images)
    }

    useEffect(() => {
        getImages()
    }, [])

    console.log(pokemonImages)
    return (
        <>
            {image ? <img src={image}/> : "Loading"}
        </>
    )
}

export default Cards;