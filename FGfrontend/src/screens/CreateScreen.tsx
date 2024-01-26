import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import BaseScreen from "../components/BaseScreen";
import Button from "../components/Button";
import Content from "../components/Content";

import { CreateScreenProps } from "../types";
import { useState } from "react";
import BaseVisibilityCheckbox from "../components/BaseVisibilityCheckbox";


const CreateScreen = ({ navigation, route }: CreateScreenProps) => {
    const [title, setGameTitle] = useState('');
    const [maxPlayers, setMaxPlayers] = useState('');
    const [password, setPassword] = useState('');
    const [maxRounds, setMaxRounds] = useState('');
    const [roundAmount, setRoundAmount] = useState('');
    const [firstMessage, setFirstMessage] = useState('');
    const [generatedId, setGeneratedId] = useState('');

    const maxLength = 100

    const generateId = () => {
        const generate = Math.floor(Math.random() * (Math.max(Math.random() * 1000, Math.random() * 10)))
        setGeneratedId(generate.toString())
    }



    const handleCreateButtonPress = () => {
        var gameObj = createGameObject()
        navigation.navigate('Join', gameObj)
    }
    //#TODO add checks for null for each input field and submit data to join screen
    //#TODO fix crash because of null checking (if(title&&...)) on submit
    const createGameObject = () => {
        generateId()
        if (title && maxPlayers && maxRounds) {
            const obj = {
                gameId: generatedId,
                gameTitle: title,
                gamePlayersAmount: maxPlayers,
                gameMaxRounds: maxRounds,
                messages: [firstMessage],
                password: password
            }
            return obj;
        } else {
            throw new Error(
                `gameId: ${generatedId}
gameTitle: ${title}
gamePlayersAmount: ${maxPlayers}
firstMessage: ${firstMessage}
pw: ${password}`
            )
        }
    }

    return (
        <BaseScreen route={route}>
            <Content style={styles.content}>
                <Text style={styles.heading}>Create Game</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={title => setGameTitle(title)}
                        value={title}
                        style={styles.input}
                        placeholder='Game Title'
                        placeholderTextColor={'darkgreen'}
                        maxLength={35}
                        inputMode="text"
                    />
                    <TextInput
                        onChangeText={maxPlayers => setMaxPlayers(maxPlayers)}
                        value={maxPlayers}
                        style={styles.input}
                        placeholder='Max Players'
                        placeholderTextColor={'darkgreen'}
                        maxLength={2}
                        inputMode="numeric"
                    />
                    <TextInput
                        onChangeText={roundAmount => setRoundAmount(roundAmount)}
                        value={roundAmount}
                        style={styles.input}
                        placeholder="Amount of Rounds"
                        placeholderTextColor={'darkgreen'}
                        maxLength={2}
                        inputMode="numeric"
                    />
                    <TextInput
                        onChangeText={password => setPassword(password)}
                        value={password}
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor={'darkgreen'}
                        maxLength={25}
                        secureTextEntry
                    />
                    <BaseVisibilityCheckbox
                        label="Create with first message"
                        containerStyle={styles.checkboxContainer}
                    >
                        <TextInput
                            onChangeText={firstMessage => setFirstMessage(firstMessage)}
                            value={firstMessage}
                            style={styles.input}
                            placeholder="Put your First message here"
                            placeholderTextColor={'darkgreen'}
                            maxLength={maxLength}
                            keyboardType="default"
                        />
                    </BaseVisibilityCheckbox>
                </View>
                <Button style={styles.createButton} onPress={handleCreateButtonPress} buttonText={"Create"} />
            </Content>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        top: 32
    },
    input: {
        borderWidth: 2,
        padding: 12,
        width: '100%',
        minWidth: 300,
        maxWidth: '100%',
        backgroundColor: '#def',
        height: 45
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 12,
        gap: 20,
    },
    content: {
        width: '100%',
        maxWidth: '100%',
        flexDirection: 'column',
    },
    createButton: {
        bottom: 10,
        borderWidth: 2,
        borderRadius: 12,
        padding: 25,
        backgroundColor: '#def'
    },
    checkboxContainer: {
        gap: 20,
        alignItems: 'center'
    }
})

export default CreateScreen;