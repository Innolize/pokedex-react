import React from 'react';

const BuscadorPokemon = ({ onChange }) => {
  return (
    <>
      <div style={{ flexDirection: "column" }}>
        <img style={{ height: "120px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png' alt="?" />
      </div>
      <div>
        <input type="text" style={{ width: "400px" }} onChange={onChange}></input >
      </div>
    </>
  )
}

export default BuscadorPokemon;