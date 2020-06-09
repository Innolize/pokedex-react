import React from 'react';
import { useFetchReducer } from '../../customHooks/useFetch';
import { fetchArrayTipos } from '../../utilidades';
import { Spinner } from 'react-bootstrap';


const TiposTraducidos = ({ tipos }) => {
    const { data, loading, error } = useFetchReducer(fetchArrayTipos, tipos)


    if (loading)
        return (<Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>)
    if (error)
        return (<div>error</div>)
    if (data)
        console.log(data)
    return (
        <div className="d-flex">
            {data.map((x, i) => <p key={i} style={{paddingRight:"5px"}}>{x}</p>)}
        </div>
    )
}

export default TiposTraducidos