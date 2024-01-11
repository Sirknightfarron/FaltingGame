import { StyleSheet, Text, Pressable } from "react-native";

type GameListItemProps = {
    item: {
        id: Number,
        title: String,
        players: Number;
    },
    onPress: () => void;
}



const GameListItem = ({ item, onPress }: GameListItemProps) => {
    <Pressable style={styles.gamePressable} onPress={onPress}>
        <Text style={styles.gameTitle}>{item.title}</Text>
        <Text style={styles.gamePlayersAmount}>Players: {item.players}</Text>
        <Text style={styles.gameId}>Id: {item.id}</Text>
    </Pressable>
}
const styles = StyleSheet.create({
    gamePressable: {},
    gameTitle: {},
    gameId: {},
    gamePlayersAmount: {}
});

export default GameListItem;