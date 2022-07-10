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
    <p key={i}>
      <strong>{estadistica[i]}</strong>:{stats[i].base_stat}
    </p>
  ));
};

export default Stats;
