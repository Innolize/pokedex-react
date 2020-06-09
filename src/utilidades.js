export async function obtenerDescripcion(id) {
    console.log(id)
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    if (!r.ok) {
        throw new Error('API ERROR')
    }
    const rJSON = await r.json()

    const descripcion = rJSON.flavor_text_entries.find((x) =>
        x.language.name === "es");
    return descripcion
}


export const obtenerMiniDescripcion = async (id) => {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    const rJSON = await r.json()
    let miniDescripcion = rJSON.genera.find((x) =>
        x.language.name === "es" && x.version.name === "y");
    return miniDescripcion
}


export const buscarPokemon = async (pokemon) => {
    const URL_BASE_POKEMON = "https://pokeapi.co/api/v2/pokemon/"
    const datos = await fetch(`${URL_BASE_POKEMON}${pokemon}`)
    if (!datos.ok) {
        throw new Error('API ERROR')
    }
    return datos.json()
}

export const fetchArrayTipos = async (array) => {
    debugger
    console.log(array)

    let traduccionArray = []

    for (let URL of array) {
        const r = await fetch(URL.type.url)
        const rJSON = await r.json()
        const temporal = rJSON.names.find((x) =>
            x.language.name === "es");
        traduccionArray.push(temporal.name)
    }
    return traduccionArray
}