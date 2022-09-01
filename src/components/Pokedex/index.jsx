import { useEffect, useState } from "react";

export function Pokedex() {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  function getPokemons() {
    pokedex.map((e) => {
      fetch(e.url)
        .then((res) => res.json())
        .then((data) => setPokemon(data));
    });
  }
  function getPokedex() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => setPokedex(data.results));
    getPokemons();
  }

  useEffect(() => {
    getPokedex();
    getPokemons();
  }, []);

  return (
    <>
      <ul>
        {pokedex.map((e) => {
          return <li key={e.name}>{e.name}</li>;
        })}
      </ul>
    </>
  );
}
