import React, { useState } from 'react';
import { Button, Pagination } from 'react-bootstrap';

const Paginador = ({ botonAnterior, botonSiguiente, totalPokemones, pokemonesPorPagina, itemOnClick, offset }) => {
    const totalPaginas = Math.ceil(totalPokemones / pokemonesPorPagina)
    const [paginaActual, SetPaginaActual] = useState(1)

    let items = [];

    const manejadorItemOnclick = (number) => {
        itemOnClick(pokemonesPorPagina * (number - 1))
        SetPaginaActual(number)
        console.log(paginaActual)
    }

    for (let number = 1; number <= totalPaginas; number++) {
        items.push(
            <Pagination.Item key={number} active={number === paginaActual} onClick={() => manejadorItemOnclick(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <>



            <ul style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", listStyle: "none" }}>
                <Button onClick={botonAnterior}>Anterior</Button>
                {items}
                <Button onClick={botonSiguiente}>Siguiente</Button>
            </ul>


        </>
    )
}



export default Paginador