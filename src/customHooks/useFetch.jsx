import { useEffect, useReducer } from 'react'

const initialState = { loading: true, data: null, error: null }

const fetchReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SUCCESS':
            return { loading: false, data: payload, error: null };
        case 'ERROR':
            return { loading: false, data: null, error: payload };
        default:
            return state
    }
}


export const useFetchReducer = ( fetchCallback, param, opcional) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        const test = async () => {
            dispatch({ type: 'LOAD' })
            try {
                const datos = await fetchCallback(param, opcional)
                dispatch({ type: 'SUCCESS', payload: datos })
            } catch (error) {
                console.log(error)
                dispatch({ type: 'ERROR', payload: error })
            }
        }
        test()
    }, [fetchCallback, param]);

    return state;
}
