import axios from "axios";
import Pokemon from '../entidades/pokemonClass'

const BASE_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

export const obtenerPokemon = async (id) => {
  const pokemon = (await axios.get(BASE_POKEMON_URL + id)).data;
  const data = await Promise.all([
    obtenerDescripcion(pokemon.id),
    fetchArrayTipos(pokemon.types),
    fetchArrayHabilidades(pokemon.abilities),
  ]);
  const newPokemon = new Pokemon({...pokemon,abilities:data[2],types:data[1],description: data[0]})
  return newPokemon;
};

export const fetchArrayTipos = async (array) => {
  let tipos = await Promise.all(
    array.map(async (type) => {
      let r = await fetch(type.type.url);
      let response = await r.json();
      const temporal = response.names.find((x) => x.language.name === "es");
      return temporal.name;
    })
  );
  return tipos;
};

export async function obtenerDescripcion(id) {
  const respuesta = (
    await axios(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  ).data;

  const descripcion = respuesta.flavor_text_entries.find(
    (x) => x.language.name === "es"
  );
  return descripcion;
}

export const fetchArrayHabilidades = async (array) => {
  let habilidades = await Promise.all(
    array.map(async (habilidad) => {
      let respuesta = (await axios(habilidad.ability.url)).data;
      const temporal = respuesta.names.find((x) => x.language.name === "es");
      return temporal.name;
    })
  );
  return habilidades;
};
