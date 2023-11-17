import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the parameter list for the root navigator
export type RootStackParamList = {
  Overview: undefined;
  Create: undefined;
  Join: undefined;
};

// Define a type for the navigation prop of each screen
export type OverviewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Overview'>;
export type CreateScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Create'>;
export type JoinScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Join'>;

// Define a type for the route prop of each screen
export type OverviewScreenRouteProp = RouteProp<RootStackParamList, 'Overview'>;
export type CreateScreenRouteProp = RouteProp<RootStackParamList, 'Create'>;
export type JoinScreenRouteProp = RouteProp<RootStackParamList, 'Join'>;
