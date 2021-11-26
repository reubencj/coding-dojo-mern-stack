import React, { useState, useEffect } from "react";
import styles from "./PokemonList.module.css";
const PokemonList = (props) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemonData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setPokemons(response.results);
      });
  };

  useEffect(() => getPokemonData(), []);

  return (
    <div className={styles.container}>
      <button onClick={() => getPokemonData()} className={styles.buttonStyle}>
        Fetch Pokemon
      </button>
      <ul>
        {pokemons.map((pokemon, index) => {
          const firstLetter = pokemon.name.charAt(0).toUpperCase();
          const restOfTheName = pokemon.name.slice(1);
          const pokemonName = `${firstLetter}${restOfTheName}`;

          return <li key={index}>{pokemonName}</li>;
        })}
      </ul>
    </div>
  );
};

export default PokemonList;
