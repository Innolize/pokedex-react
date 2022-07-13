import { rest } from "msw";
import * as venusaur from "./mock-response/mock-venusaur.json";
import * as descripcion from "./mock-response/descripcion-ivysaur.json";
import * as tipoCuatro from "./mock-response/tipo-4.json";
import * as tipoDoce from "./mock-response/tipo-12.json";
import * as habilidad34 from "./mock-response/habilidad-34.json";
import * as habilidad65 from "./mock-response/habilidad-65.json";

const getPokemonResolver = async (req, res, ctx) => {
  return res(ctx.json(venusaur));
};

const getDescripcion = (req, res, ctx) => {
  return res(ctx.json(descripcion));
};

const getTipos = (req, res, ctx) => {
  const { id } = req.params;
  console.log(id);
  if (id === "4") {
    return res(ctx.json(tipoCuatro));
  } else if (id === "12") {
    return res(ctx.json(tipoDoce));
  } else {
    console.log("aca tiro error");
  }
};

const getHabilidades = (req, res, ctx) => {
  const { id } = req.params;
  console.log(id);
  if (id === "34") {
    return res(ctx.json(habilidad34));
  } else if (id === "65") {
    return res(ctx.json(habilidad65));
  } else {
    console.log("aca tiro error");
  }
};

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon-species/:id", getDescripcion),
  rest.get("https://pokeapi.co/api/v2/pokemon/:id", getPokemonResolver),
  rest.get("https://pokeapi.co/api/v2/type/:id", getTipos),
  rest.get("https://pokeapi.co/api/v2/ability/:id", getHabilidades),
];
