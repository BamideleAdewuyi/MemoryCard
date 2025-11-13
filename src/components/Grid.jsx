import './Grid.css'
import { useState, useEffect } from 'react';

function Grid() {

    const link = 'https://pokeapi.co/api/v2/pokemon/'

    const [pokemonNames, setPokemonNames] = useState(["Ditto", "Charizard", "Squirtle", "Pikachu", "Magnemite", "Arbok", "Venusaur", "Machamp", "Zapdos", "Mewtwo"])

    const [pokemonImages, setPokemonImages] = useState([])
    const [image, setImage] = useState(null);

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    async function getRandomImages() {
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
      shuffle(images);
      setPokemonImages(images)
    }

    useEffect(() => {
        getRandomImages()
    }, [])

    console.log(pokemonImages)
    return (
        <>
            {image ? <img src={image}/> : "Loading"}
        </>
    )
}

export default Grid;