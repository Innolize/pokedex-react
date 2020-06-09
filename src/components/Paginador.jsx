import React from 'react';
import { Button } from 'react-bootstrap';

const Paginador = ({ botonAnterior, botonSiguiente }) => {
    return (
        <>
            <Button onClick={botonAnterior}>Anterior</Button>
            <Button onClick={botonSiguiente}>Siguiente</Button>
        </>
    )
}



export default Paginador