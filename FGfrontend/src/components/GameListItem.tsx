import { StyleSheet, Text, Pressable, View } from "react-native";

export type GameListItemProps = {
    item: {
        gameId: string;
        gameTitle: string;
        gamePlayersAmount: number;
    };
    onPress: (gameId: string) => void;
}

const GameListItem = ({ item, onPress }: GameListItemProps) => (
    <Pressable style={styles.gamePressable} onPress={() => onPress(item.gameId)}>
        <Text style={styles.gameTitle}>{item.gameTitle}</Text>
        <View style={styles.gameInfos}>
            <Text style={styles.gamePlayersAmount}>Players: {item.gamePlayersAmount}</Text>
            <Text style={styles.gameId}>ID: {item.gameId}</Text>
        </View>
    </Pressable>
)

const styles = StyleSheet.create({
    gameInfos: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingTop: 5,
        width: '36%'
    }, 
    gamePressable: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        borderWidth: 1,
        padding: 12,
        borderRadius: 14,
        backgroundColor: '#def',
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    gameTitle: {
        fontSize: 20,
        width: '64%'
    },
    gamePlayersAmount: {},
    gameId: {},
});

export default GameListItem;