import React from 'react'
import { useFetchReducer } from '../../customHooks/useFetch';
import { obtenerDescripcion } from '../../utilidades'
import { Spinner } from 'react-bootstrap'


export const DescripcionPokemon = ({ id }) => {
    const { data, loading, error } = useFetchReducer(obtenerDescripcion, id)

    if (loading)
        return (<Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>)
    if (error)
        return (<div>error</div>)
    if (data)
        console.log(data)
    return (<div>{data.flavor_text}</div>)
}

export default DescripcionPokemon