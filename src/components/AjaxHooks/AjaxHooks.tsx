import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

interface DATA {
  id: number;
  name: string;
  avatar: string;
}
const AjaxHooks = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<DATA[]>([]);
  const URL: string = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const getPokemon = async (url: string): Promise<void> => {
      let res: Response = await fetch(url),
        json = await res.json();
      json.results.forEach(async (el: any) => {
        let res = await fetch(el.url),
        json = await res.json();
        let pokemon: DATA = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default
        }
        setPokemons((pokemons) => [...pokemons, pokemon])
      })
    };
    getPokemon(URL);
  }, []);

  return (
    <div>
      <h2>Peticiones Asincronas con Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        pokemons.map((el: DATA, index: number) => (
          <Pokemon key={index} name={el.name} url={el.avatar} />
        ))
      )}
    </div>
  );
};

export default AjaxHooks;
