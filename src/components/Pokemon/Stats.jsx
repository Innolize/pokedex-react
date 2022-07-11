import React from "react";

const estadistica = [
  "PS",
  "Ataque",
  "Defensa",
  "Ataque Especial",
  "Defensa Especial",
  "Velocidad",
];

const Stats = ({ stats }) => {
  return estadistica.map((stat, i) => (
    <ul key={i}>
      <strong>{estadistica[i]}</strong>:{stats[i].base_stat}
    </ul>
  ));
};

export default Stats;
