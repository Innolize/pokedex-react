import { rest } from "msw";
import * as todosPokemones from "./mock-response/pokedex/limit-9-offset-0.json";
import * as unoATres from "./mock-response/pokedex/limit-3-offset-0.json";
import * as cuatroASeis from "./mock-response/pokedex/limit-3-offset-3.json";
import * as sieteANueve from "./mock-response/pokedex/limit-3-offset-6.json";

const getTodosPokemones = (req, res, ctx) => {
  return res(ctx.json(todosPokemones));
};

const getUnoATres = (req, res, ctx) => {
  return res(ctx.json(unoATres));
};

const getCuatroASeis = (req, res, ctx) => {
  return res(ctx.json(cuatroASeis));
};

const getSieteANueve = (req, res, ctx) => {
  return res(ctx.json(sieteANueve));
};

export const handlers = [
  rest.get(
    "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0",
    getTodosPokemones
  ),
  rest.get("https://pokeapi.co/api/v2/pokemon?limit=3&offset=0", getUnoATres),
  rest.get(
    "https://pokeapi.co/api/v2/pokemon?limit=3&offset=3",
    getCuatroASeis
  ),
  rest.get(
    "https://pokeapi.co/api/v2/pokemon?limit=3&offset=6",
    getSieteANueve
  ),
];
