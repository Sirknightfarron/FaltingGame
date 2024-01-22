import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OverviewScreen from './src/screens/OverviewScreen';
import JoinScreen from './src/screens/JoinScreen';
import CreateScreen from './src/screens/CreateScreen';
import GameScreen from './src/screens/GameScreen';

const Stack = createNativeStackNavigator();

// const MyTransition = {
//   gestureDirection: 'horizontal',
//   transitionSpec: {
//     open: TransitionSpecs.TransitionIOSSpec,
//     close: TransitionSpecs.TransitionIOSSpec,
//   },
//   headerStyleInterpolator: HeaderStyleInterpolators.forFade,
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Overview'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Overview' component={OverviewScreen} />
        <Stack.Screen name='Join' component={JoinScreen} />
        <Stack.Screen
          name='Create'
          component={CreateScreen}
        />
        <Stack.Screen name='Game' component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

