import type { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the parameter list for the root navigator
export type RootStackParamList = {
  Overview: undefined;
  Create: undefined;
  Join: {
    gameId: string,
    gameTitle: string,
    gamePlayersAmount: string,
    gameMaxRounds: string,
    messages: String[],
    password: string
  };
  Game: {
    gameId: string,
    gameTitle: string,
    gamePlayersAmount: string,
    gameMaxRounds: string,
    messages: String[],
    password: string
  };
};

// Define a type for the navigation prop of each screen
type OverviewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Overview'>;
type CreateScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Create'>;
type JoinScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Join'>;
type GameScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Game'>;

// Define a type for the route prop of each screen
type OverviewScreenRouteProp = RouteProp<RootStackParamList, 'Overview'>;
type CreateScreenRouteProp = RouteProp<RootStackParamList, 'Create'>;
type JoinScreenRouteProp = RouteProp<RootStackParamList, 'Join'>;
type GameScreenRouteProp = RouteProp<RootStackParamList, 'Game'>;

export type OverviewScreenProps = {
  route: OverviewScreenRouteProp;
  navigation: OverviewScreenNavigationProp;
}

export type GameScreenProps = {
  route: GameScreenRouteProp;
  navigation: GameScreenNavigationProp;
}

export type CreateScreenProps = {
  route: CreateScreenRouteProp;
  navigation: CreateScreenNavigationProp;
}

export type JoinScreenProps = {
  route: JoinScreenRouteProp;
  navigation: JoinScreenNavigationProp;
}

