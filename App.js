/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PokedexDashboardStack from './src/Components/Dashboard/PokedexDashboardStack';

const App = () => {
  return(
    <NavigationContainer>
      <PokedexDashboardStack />
    </NavigationContainer>
  );
};

export default App;
