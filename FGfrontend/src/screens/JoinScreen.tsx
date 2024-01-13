import { Text, StyleSheet, FlatList, Pressable, View, StatusBar } from "react-native";
import { useState } from "react";
import BaseScreen from "../components/BaseScreen";
import { JoinScreenNavigationProp, JoinScreenRouteProp } from "../types";
import Button from "../components/Button";
import Content from "../components/Content";
import GameListItem, { GameListItemProps } from "../components/GameListItem";

type JoinScreenProps = {
    navigation: JoinScreenNavigationProp;
    route: JoinScreenRouteProp;
    data: GameListItemProps[];
}

const dadata = [{
    gameId: "2",
    gameTitle: 'Wathefugg',
    gamePlayersAmount: 6
}, {
    gameId: "3",
    gameTitle: 'Wathefucg',
    gamePlayersAmount: 6
}, {
    gameId: "4",
    gameTitle: 'Wathefugk',
    gamePlayersAmount: 6
}, {
    gameId: "6",
    gameTitle: 'Fuggthewhat',
    gamePlayersAmount: 6
}, {
    gameId: "7",
    gameTitle: 'Wathefugk',
    gamePlayersAmount: 6
}, {
    gameId: "8",
    gameTitle: 'Fuggthewhat',
    gamePlayersAmount: 6
},

]

const JoinScreen = ({ route }: JoinScreenProps) => {
    const [game, setGame] = useState(dadata);
    const handleJoinButtonPress = () => {
        setGame(dadata)
    }

    //#TODO implement FlatList for joinable games and a field to put the name or id of a game in
    // implement item and css/visuals
    const renderItem = ({ item }) => (
        <GameListItem item={item}
            onPress={handleJoinButtonPress}
        />
    )

    return (
        <BaseScreen route={route}>
            <Content style={styles.content}>
                <Text style={styles.heading}>'Your Games'</Text>
                <FlatList
                    data={game}
                    keyExtractor={(item) => item.gameId}
                    renderItem={renderItem} />
                <Button
                    cstyle={styles.joinButton}
                    onPress={handleJoinButtonPress}
                    buttonText={"Join"} />
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
        borderColor: 'black'
    },
    gameInfos: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingTop: 5,
        width: '36%'
    },
    joinButton: {
        alignContent: 'center',
        justifyContent: 'space-around',
        padding: 25,
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: '#def',
        bottom: 10
    }

})

export default JoinScreen;