/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OverviewScreen from './src/screens/OverviewScreen';
import CreateScreen from './src/screens/CreateScreen';
import JoinScreen from './src/screens/JoinScreen';

import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Overview'>
          <Stack.Screen name="Overview" component={OverviewScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Join" component={JoinScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;