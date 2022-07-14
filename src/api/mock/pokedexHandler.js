import { rest } from "msw";
import * as todosPokemones from "./mock-response/pokedex/limit-9-offset-0.json";
import * as unoATres from "./mock-response/pokedex/limit-3-offset-0.json";
import * as cuatroASeis from "./mock-response/pokedex/limit-3-offset-3.json";
import * as sieteANueve from "./mock-response/pokedex/limit-3-offset-6.json";

const offsetLimitPokemons = (req, res, ctx) => {
  const limit = req.url.searchParams.get("limit");
  const offset = req.url.searchParams.get("offset");
  if (limit === "9" && offset === "0") {
    return res(ctx.json(todosPokemones));
  } else if (limit === "3" && offset === "0") {
    return res(ctx.json(unoATres));
  } else if (limit === "3" && offset === "3") {
    return res(ctx.json(cuatroASeis));
  } else {
    return res(ctx.json(sieteANueve));
  }
};

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon", offsetLimitPokemons),
];
