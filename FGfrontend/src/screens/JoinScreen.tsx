import { Text, StyleSheet, FlatList } from "react-native";
import BaseScreen from "../components/BaseScreen";
import { JoinScreenNavigationProp, JoinScreenRouteProp } from "../types";
import Button from "../components/Button";
import { useState } from "react";
import Content from "../components/Content";

type JoinScreenProps = {
    navigation: JoinScreenNavigationProp;
    route: JoinScreenRouteProp;
}

const JoinScreen = ({route}: JoinScreenProps) => {
    const [joinText, setJoinText] = useState('Join Game')
    const handleJoinButtonPress = () => {
        setJoinText('Joined...')
    }


    //#TODO implement FlatList for joinable games and a field to put the name or id of a game in
    return (
        <BaseScreen route={route}>
            <Text style={styles.heading}>{joinText}</Text>
            <Content>
                <Text>Heylo</Text>
                <Button onPress={handleJoinButtonPress} buttonText={"Join"}  />
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