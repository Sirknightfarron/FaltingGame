import { Text, StyleSheet, FlatList, View, StatusBar, Dimensions } from "react-native";
import { useState } from "react";
import BaseScreen from "../components/BaseScreen";
import { JoinScreenProps } from "../types";
import Button from "../components/Button";
import Content from "../components/Content";
import GameListItem, { GameListItemProps } from "../components/GameListItem";

// type JoinScreenProps = {
//     navigation: JoinScreenNavigationProp;
//     route: JoinScreenRouteProp;
//     data: GameListItemProps[];
// }

type GameProps = {
    gameId: string;
    gameTitle: string;
    gamePlayersAmount: number;
    gameMaxRounds: number;
    messages?: String[];
    password?: string,
}

export var dadata = [{
    gameId: "2",
    gameTitle: 'Wathefugg',
    gamePlayersAmount: '6',
    gameMaxRounds: '6',
    messages: ["Elo", "Du oarschkoatzl", "platz'alter"],
    password: "Pensi"
}, {
    gameId: "3",
    gameTitle: 'Wathefucg',
    gamePlayersAmount: '6',
    gameMaxRounds: '6',
    messages: ["Elo", "Du oarschkoatzl", "platz'alter"],
    password: "Pensi"
}, {
    gameId: "4",
    gameTitle: 'Wathefugk',
    gamePlayersAmount: '6',
    gameMaxRounds: '6',
    messages: ["Elo", "Du oarschkoatzl", "platz'alter"],
    password: "Pensi"
}, {
    gameId: "6",
    gameTitle: 'Fuggthewhat',
    gamePlayersAmount: '6',
    gameMaxRounds: '6',
    messages: ["Elo", "Du oarschkoatzl", "platz'alter"],
    password: "Pensi"
}, {
    gameId: "7",
    gameTitle: 'Wathefugk',
    gamePlayersAmount: '6',
    gameMaxRounds: '6',
    messages: ["Elo", "Du oarschkoatzl", "platz'alter"],
    password: "Pensi"
}, {
    gameId: "8",
    gameTitle: 'Fuggthewhat',
    gamePlayersAmount: '6',
    gameMaxRounds: '6',
    messages: ["Elo", "Du oarschkoatzl", "platz'alter"],
    password: "Pensi"
}]

const JoinScreen = ({ route, navigation }: JoinScreenProps) => {
    const [game, setGame] = useState(dadata);

    const [selectedGame, setSelectedGame] = useState<GameProps | null>(null);
    const [selectedGameId, setSelectedGameId] = useState<string | null>(null);

    const handleSelect = (gameID: string) => {
        setSelectedGameId(gameID);
    }

    const handleJoinButtonPress = () => {
        if (selectedGameId) {
            const selectedGame = game.find((game) => game.gameId === selectedGameId);
            navigation.navigate('Game', {
                gameId: selectedGame.gameId,
                gameTitle: selectedGame.gameTitle,
                gamePlayersAmount: selectedGame.gamePlayersAmount,
                gameMaxRounds: selectedGame.gameMaxRounds,
                messages: selectedGame.messages,
                password: selectedGame.password
            });
        } else {
            throw new Error("No Game Selected!");
        }
    }

    const handleSearchButtonPress = (): void => {
        throw new Error("Function not implemented.");
    }

    //#TODO implement searchfield to put the name or id of a game in
    // implement item and css/visuals
    const renderItem = ({ item }) => (
        <GameListItem
            item={item}
            onPress={handleSelect}
            selected={selectedGameId === item.gameId}
        />
    )

    return (
        <BaseScreen route={route}>
            <Content style={styles.content}>
                <Text style={styles.heading}>Your Games</Text>
                <View style={styles.listContainer}>
                    <FlatList
                        data={game}
                        keyExtractor={(item) => item.gameId}
                        renderItem={renderItem} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.joinButton}
                        onPress={handleSearchButtonPress}
                        buttonText="Search"
                    />
                    <Button
                        style={styles.joinButton}
                        onPress={handleJoinButtonPress}
                        buttonText={"Join"} />
                </View>
            </Content>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: StatusBar.currentHeight || 0,
    },
    content: {
        borderWidth: 2,
        borderColor: 'black',
        height: '100%'
    },
    gameInfos: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingTop: 5,
        width: '36%'
    },
    joinButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '45%',
        padding: 25,
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: '#def',
        bottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    listContainer: {
        borderWidth: 2,
        borderRadius: 12,
        height: Dimensions.get('window').height*0.6,
        marginBottom: 28,
        paddingBottom: 2,
        backgroundColor: '#def',
        
    }
})

export default JoinScreen;