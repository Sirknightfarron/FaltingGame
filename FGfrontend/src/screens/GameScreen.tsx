import { Text, StyleSheet, TextInput, View, Dimensions } from "react-native";
import Content from "../components/Content";
import BaseScreen from "../components/BaseScreen";
import Button from "../components/Button";
import React, { useState } from "react";

const GameScreen = ({ route, navigation }) => {
    const { gameId, gameTitle, gamePlayersAmount, messages } = route.params;
    const [ userInput, setUserInput ] = useState('');
    const [ lastMessage, setLastMessage ] = useState('This is the first message');

    const handleSubmit = () => {
        setLastMessage(userInput)
    }

    return (
        <BaseScreen route={route} >
            <Content style={styles.content}>
                <Text style={styles.heading}>{gameTitle}</Text>
                <View style={styles.lastMessageContainer}>
                    <Text style={styles.lastMessageTitle}>Last Message: </ Text>
                    <Text> {lastMessage}</Text>
                </View>
                <TextInput
                    maxLength={300}
                    multiline
                    style={ styles.textInput }
                    placeholder="Enter your wonderful idea here!"
                    onChangeText={setUserInput}
                    value={ userInput }
                />
                <View style={styles.infoContainer}>
                    <Text>#Players: { gamePlayersAmount }</Text>
                    <Text>ID: { gameId }</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonText='Submit'
                        onPress={handleSubmit}
                        style={styles.buttons}
                    />
                </View>
            </Content>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        gap: 20
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20
    },
    textInput: {
        width: '100%',
        height: Dimensions.get('window').height/2,
        backgroundColor: '#def',
        borderWidth: 2,
        borderRadius: 12,
        padding: 12,
        fontSize: 18
    },
    buttonContainer: {
        flex: 1,
        gap: 12
    },
    buttons: {
        backgroundColor: '#def',
        height: 66,
        borderRadius: 12,
        borderWidth: 2,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        top: 10
    },
    infoContainer:{
        flexDirection: 'row',
        gap: Dimensions.get('window').height*0.2,
    },
    lastMessageContainer: {
        height: Dimensions.get('window').height*0.07
    },
    lastMessageTitle: {
        fontWeight: 'bold'
    }
})

export default GameScreen;