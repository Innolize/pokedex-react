import React from "react";

const HabilidadPokemon = ({ habilidades }) => {
  return (
    <>
      <p>
        <strong>Habilidades:</strong>
      </p>
      {habilidades.map((x, i) => (
        <p key={i}>{x}</p>
      ))}
    </>
  );
};

export default HabilidadPokemon;
