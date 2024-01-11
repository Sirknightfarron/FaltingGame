import { Text, StyleSheet, FlatList, Pressable, View } from "react-native";
import { useState } from "react";
import BaseScreen from "../components/BaseScreen";
import { JoinScreenNavigationProp, JoinScreenRouteProp } from "../types";
import Button from "../components/Button";
import Content from "../components/Content";
import GameListItem from "../components/GameListItem";

type JoinScreenProps = {
    navigation: JoinScreenNavigationProp;
    route: JoinScreenRouteProp;
    DUMMY_GAMES: undefined;
}

const JoinScreen = ({ route, DUMMY_GAMES }: JoinScreenProps) => {
    const [games, joinGame] = useState(DUMMY_GAMES)
    const handleJoinButtonPress = () => {
        setJoinText('Joined...')
    }
    //#TODO implement FlatList for joinable games and a field to put the name or id of a game in
    // implement item and css/visuals
    const renderItem = ({item}: GameListItemProps) => {
        return (
            <GameListItem item={{
                id: undefined,
                title: undefined,
                players: undefined
            }} 
            onPress={() => joinGame(item.gameId) }            
            />
        )
    }

    return (
        <BaseScreen route={route}>
            <Text style={styles.heading}>'Your Games'</Text>
            <Content>
                <View>
                    <FlatList
                        data={DUMMY_GAMES}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.gameIdId} />
                </View>
                <Button onPress={handleJoinButtonPress} buttonText={"Join"} />
            </Content>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default JoinScreen;