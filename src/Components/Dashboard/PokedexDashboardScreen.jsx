import React, { useState, useEffect } from "react";
import { View, Text, Pressable, FlatList, ActivityIndicator, Image } from 'react-native';
import styles from './styles/dashboardScreenStyles';

import { fetchPokemons } from '../../Containers/fetchPokemons';

let PokedexDashboardScreen = props => {

    const [state, setState] = useState({
        pokemons: [],
        loading: false
    });

    useEffect( () => {

        let fetchPokemonsFunction = async () => {
            setState({
                ...state,
                loading: !state.loading
            })  
            fetchPokemons({ state, setState })
        }
        fetchPokemonsFunction()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let handlePress = (pokemonId) => {
        props.navigation.navigate('Pokemon', { pokemonId })
    }

    let capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Pokedex</Text>

            {
                state.loading ? <ActivityIndicator 
                    color="black"
                    size="large"
                /> : null
            }

            <FlatList 
                data={state.pokemons}
                renderItem={ ({ item }) => (
                    <Pressable key={item.id} style={styles.containerList} onPress={ () => handlePress(item.id)}>
                        <View style={styles.rowList}>
                            <Text style={styles.textList}>{capitalizeFirstLetter(item.name)}</Text>
                        </View>
                        <View style={styles.rowList}>
                           <Image
                                style={styles.imageList}
                                source={{ uri: item.image }}
                           />
                        </View>
                    </Pressable> 
                )}
            />
            {/*<Pressable onPress={handlePress} style={styles.btn}>
                <Text style={styles.btnText}>Ir a Pokemon Detail</Text>
            </Pressable>*/}
        </View>
    );
}

export default PokedexDashboardScreen