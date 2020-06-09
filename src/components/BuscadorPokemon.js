import React, { useState } from 'react';




const BuscadorPokemon = ({ onClick, value, onChangeBusqueda }) => {

  return (
    <>
      <div style={{ flexDirection: "column" }}>
        <img style={{ height: "120px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png' alt="?" />
      </div>
      <div>
        <input type="text" style={{ width: "400px" }} value={value} onChange={onChangeBusqueda} ></input >
        <button onClick={onClick}>Buscar!</button>
      </div>
    </>
  )
}

export default BuscadorPokemon;