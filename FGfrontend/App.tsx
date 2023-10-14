/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>{
      /* Rest of your app code */
      
      }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#fac'
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: '#AFC'
  },

  highlight: {
    fontWeight: '700',
  },

});

export default App;
