import React from 'react';
import { useFetchReducer } from '../../customHooks/useFetch';
import { fetchArrayHabilidades } from '../../utilidades';
import { Spinner } from 'react-bootstrap'


const HabilidadPokemon = ({ habilidades }) => {
    const { data, loading, error } = useFetchReducer(fetchArrayHabilidades, habilidades)
    console.log(data)
    if (loading)
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )

    if (error)
        return (
            <div>error</div>
        )
    if (data)
        return (
            <>
                <p><strong>Habilidades:</strong></p>
                {data.map((x, i) => <p key={i}>{x}</p>)}
            </>
        )
}

export default HabilidadPokemon