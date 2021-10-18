import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokedexDashboardScreen from "./PokedexDashboardScreen";
import PokemonDetailScreen from "./PokemonDetailScreen";

const Stack = createStackNavigator();

const PokedexDashboardStack = () => {
 
    return(
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={PokedexDashboardScreen}/>
            <Stack.Screen name="Pokemon" component={PokemonDetailScreen} />
        </Stack.Navigator>
    );

}

export default PokedexDashboardStack