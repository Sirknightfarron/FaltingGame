import { Text } from "react-native";
import BaseScreen from "../components/BaseScreen";
import { JoinScreenNavigationProp, JoinScreenRouteProp } from "../types";
import Button from "../components/Button";
import { useState } from "react";

type JoinScreenProps = {
    navigation: JoinScreenNavigationProp;
    route: JoinScreenRouteProp;
}

const JoinScreen = ({route}: JoinScreenProps) => {
    const [joinText, setJoinText] = useState('JoinText')
    const handleJoinButtonPress = () => {
        setJoinText('Joined...')
    }

    return (
        <BaseScreen route={route}>
            <Text>{joinText}</Text>
            <Button onPress={handleJoinButtonPress} buttonText={"Join"}  />
        </BaseScreen>
    );
}

export default JoinScreen;