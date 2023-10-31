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

const Stack = createNativeStackNavigator();

const styles = {
  container: {
    flex: 1
  }
}

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Overview" component={OverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;