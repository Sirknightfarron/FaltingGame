import { Text, StyleSheet, TextInput, View, Dimensions } from "react-native";
import Content from "../components/Content";
import BaseScreen from "../components/BaseScreen";
import Button from "../components/Button";
import { GameScreenProps } from "../types";
import { useState } from "react";

const GameScreen = ({ route, navigation }: GameScreenProps) => {
    const { gameId, gameTitle, gamePlayersAmount, gameMaxRounds, messages } = route.params;
    const [ userInput, setUserInput ] = useState('');
    const [ lastMessage, setLastMessage ] = useState('This is the first message');
    const maxMessageLength = 300;
    
    const handleSubmit = () => {
        setLastMessage(userInput)
    }

    // #TODO make Last message scrollable (or lower maxMessageLength everthing should be readable //maybe autoscroll last message? )
    return (
        <BaseScreen route={route} >
            <Content style={styles.content}>
                <Text style={styles.heading}>{gameTitle}</Text>
                <View style={styles.lastMessageContainer}>
                    <Text style={styles.lastMessageTitle}>Last Message: </ Text>
                    <Text style={styles.lastMessage}> { lastMessage }</Text>
                </View>
                <View style={ styles.textInputContainer }>
                    <TextInput
                        maxLength={ maxMessageLength }
                        multiline
                        style={ styles.textInput }
                        placeholder="Enter your wonderful idea here!"
                        onChangeText={ setUserInput }
                        value={ userInput }
                        keyboardType={"default"}
                    />
                    <Text style={styles.messageLength}> {userInput.length + '/' + maxMessageLength} </Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text>ID: { gameId }</Text>
                    <Text>#Players: { gamePlayersAmount }</Text>
                    <Text>#Rounds: { gameMaxRounds }</Text>
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
        paddingLeft: 20,
        fontSize: 18
    },
    textInputContainer: {
        width: '100%',
        backgroundColor: '#def',
        borderWidth: 2,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        height: Dimensions.get('window').height*0.484,
        padding: 12,
    },
    messageLength:{
        fontSize: 12,
        alignItems: 'flex-end',
        height: '20%',
        color: '#888'
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
        gap: Dimensions.get('window').height*0.07,
        padding: 4
    },
    lastMessageContainer: {
        backgroundColor: '#def',
        borderWidth: 2,
        borderBottomWidth: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: 6,
        height: Dimensions.get('window').height*0.116,
        width: '100%',
    },
    lastMessageTitle: {
        fontWeight: 'bold'
    },
    lastMessage: {
        padding: 4,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
})

export default GameScreen;