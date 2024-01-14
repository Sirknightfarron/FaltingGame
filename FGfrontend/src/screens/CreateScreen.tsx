import { StyleSheet, Text, TextInput, View } from "react-native";
import BaseScreen from "../components/BaseScreen";
import Button from "../components/Button";
import Content from "../components/Content";

import { CreateScreenRouteProp, CreateScreenNavigationProp } from "../types";
import { useState } from "react";

type CreateScreenProps = {
    navigation: CreateScreenNavigationProp;
    route: CreateScreenRouteProp;
}

const CreateScreen = ({ navigation, route }: CreateScreenProps) => {
    const [gameTitle, setGameTitle] = useState('');
    const [maxPlayers, setMaxPlayers] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateButtonPress = () => {

    }

    return (
        <BaseScreen route={route}>
            <Content style={styles.content}>
                <Text style={styles.heading}>Create Game</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={title => setGameTitle(title)}
                        value={gameTitle}
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
                        onChangeText={password => setPassword(password)}
                        value={password}
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor={'darkgreen'}
                        maxLength={25}
                        secureTextEntry
                    />
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
        backgroundColor: '#def',
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
        flexDirection: 'column',
    },
    createButton: {
        bottom: 10,
        borderWidth: 2,
        borderRadius: 12,
        padding: 25,
        backgroundColor: '#def'
    }
})

export default CreateScreen;