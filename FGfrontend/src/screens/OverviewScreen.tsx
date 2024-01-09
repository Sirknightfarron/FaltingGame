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
                <View style={styles.middleContent}></View>
                <View style={styles.buttonContainer}>
                    <Button cstyle={styles.buttons} onPress={handleCreateButtonPress} buttonText="Create" />
                    <Button cstyle={styles.buttons} onPress={handleJoinButtonPress} buttonText="Join"/>
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
        alignContent: 'center',
        margin: 12
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'flex-end'
    },
    middleContent: {
        flex: 1
    },
    buttons: {
        width: 120,
        height: 66,
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12 
    }
})

export default OverviewScreen;