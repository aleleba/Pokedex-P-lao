import React, { useState, useEffect } from 'react';
import  { View, Text, ActivityIndicator, Image } from 'react-native';

import { fetchPokemon } from '../../Containers/fetchPokemons';

import styles from './styles/pokemonDetailStyles';

let PokemonDetailScreen = props => {

    let [ state, setState ] = useState({
        pokemon: null,
        loading: false
    })

    useEffect( () => {

        let fetchPokemonFunction = async () => {
            setState({
                ...state,
                loading: !state.loading
            })  
            fetchPokemon({ state, setState, idPokemon: props.route.params.pokemonId })
        }
        fetchPokemonFunction()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Pokemon</Text>
            {
                state.loading ? <ActivityIndicator 
                    color="black"
                    size="large"
                /> : null
            }
            {
                state.pokemon !== null ? (
                    <View style={styles.container}>
                        <Text style={styles.pokemonName}>Id: {state.pokemon.id}</Text>
                        <Text style={styles.pokemonName}>{capitalizeFirstLetter(state.pokemon.name)}</Text> 
                        <Text style={styles.pokemonName}>Type: {state.pokemon.type}</Text>
                        <Image
                            style={styles.imageList}
                            source={{ uri: state.pokemon.image }}
                        /> 
                    </View> 
                ) : null
            }
        </View>
    );

}

export default PokemonDetailScreen