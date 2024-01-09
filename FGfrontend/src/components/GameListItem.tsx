import { View, StyleSheet, Text } from "react-native";

type GameListItemProps = {
    id: Number,
    title: String,
    players: Number
}

const GameListItem = ({ id, title, players }: GameListItemProps ) => {
    return (
        <View style={styles.gameListItem}>
            <Text style={styles.title}>{title}</Text>
            <View>
                <Text>{id}</Text>
                <Text>{players}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gameListItem: {

    },
    title: {

    }
});

export default GameListItem;