import { StyleSheet, Text, View } from "react-native";
import BaseScreen from "../components/BaseScreen";
import Content from "../components/Content";
import Button from "../components/Button";
import { OverviewScreenNavigationProp, OverviewScreenRouteProp } from "../types";

type OverviewScreenProps = {
    navigation: OverviewScreenNavigationProp;
    route: OverviewScreenRouteProp;
}

const DUMMY_GAMES = [
    'GAMENAME 1, 5 Players, your turn',
    'Gamename 2, 4 players, your turn',
    'Gamename 3, 1 player, not your turn'
]

const OverviewScreen =  ({ navigation, route }: OverviewScreenProps) => {

    const listItems = DUMMY_GAMES.map(game => <li>{game}</li>)

    const handleCreateButtonPress = () => {
        navigation.navigate('Create');
    }
    const handleJoinButtonPress = () => {
        navigation.navigate('Join')
    }
    
    return (
        <BaseScreen route={ route }>
            <Content>
                <Text style={styles.heading}>FaltingGame</Text>
                <View style={styles.buttonContainer}>
                    <Button onPress={handleCreateButtonPress} buttonText="Create" />
                    <Button onPress={handleJoinButtonPress} buttonText="Join"/>
                </View>
            </Content>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 42,
        fontWeight: 'bold',
        fontFamily: 'Snell Roundhand',
        alignContent: 'flex-start'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'flex-end'
    },
    baseScreen: {

    }
})

export default OverviewScreen;