import { Text, StyleSheet, TextInput, View } from "react-native";
import Content from "../components/Content";
import BaseScreen from "../components/BaseScreen";
import Button from "../components/Button";

const GameScreen = ({ route }) => {
    const handleSubmit = () => {

    }

    return (
        <BaseScreen route={ route } >
            <Content style={styles.content}>
                <Text style={styles.heading}>Game Screen</Text>
                <TextInput 
                    maxLength={120}
                    multiline
                    style={styles.textInput}
                />
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
        height: '70%',
        backgroundColor: '#def',
        borderWidth: 2,
        borderRadius: 12,
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
    }
})

export default GameScreen;