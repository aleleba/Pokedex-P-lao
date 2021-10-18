const fetchPokemons = ({ state, setState }) => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemons = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        setState({
            ...state,
            pokemons,
            loading: false
        });
    });
};

const fetchPokemon = async ({ state, setState, idPokemon }) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

    let result = await fetch(url)
    .then((res) => res.json())
    
    let pokemon = {
        name: result.name,
        image: result.sprites['front_default'],
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
    } 

    setState({
        ...state,
        pokemon,
        loading: false
    })

}

module.exports = { fetchPokemons, fetchPokemon }