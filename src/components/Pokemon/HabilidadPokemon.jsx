import React from "react";

const HabilidadPokemon = ({ habilidades }) => {
  return (
    <ul>
      <p>
        <strong>Habilidades:</strong>
      </p>
      {habilidades.map((x, i) => (
        <p key={i}>{x}</p>
      ))}
    </ul>
  );
};

export default HabilidadPokemon;
