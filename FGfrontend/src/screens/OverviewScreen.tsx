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

const OverviewScreen =  ({ navigation }: OverviewScreenProps) => {

    const listItems = DUMMY_GAMES.map(game => <li>game</li>)

    const handleCreateButtonPress = () => {
        navigation.navigate('Create');
    }
    const handleJoinButtonPress = () => {
        navigation.navigate('Join')
    }
    
    return (
    <BaseScreen>
        <Content>
            <Text style={styles.heading}>FaltingGame</Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} onPress={handleCreateButtonPress} buttonText="Create" />
                <Button style={styles.button} onPress={handleJoinButtonPress} buttonText="Join"/>
            </View>
        </Content>
    </BaseScreen>
);
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 50
    },
    button: {
        borderWidth: 2,
        borderRadius: 12,
        padding: 12
    }
})

export default OverviewScreen;