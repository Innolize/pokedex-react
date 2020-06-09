import React from 'react'
import { useFetchReducer } from '../../customHooks/useFetch';
import { fetchArrayStats } from '../../utilidades'
import { Spinner } from 'react-bootstrap'

const Stats = ({ stats }) => {
    debugger
    const { data, loading, error } = useFetchReducer(fetchArrayStats, stats)

    if (loading)
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    if (error)
        return (
            <div>"error"</div>
        )
    if (data)
        console.log(data)
    return (
        data.map((stat, i) => <p key={i}><strong>{stat}</strong>:{stats[i].base_stat}</p>)
    )
}

export default Stats