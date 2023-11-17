import { StyleSheet, Text } from "react-native";
import BaseScreen from "../components/BaseScreen";
import Button from "../components/Button";
import Content from "../components/Content";

import { CreateScreenRouteProp, CreateScreenNavigationProp } from "../types";
import { useState } from "react";

type CreateScreenProps = {
    navigation: CreateScreenNavigationProp;
    route: CreateScreenRouteProp;
}

const CreateScreen = ({ navigation }: CreateScreenProps) => {
    const [creation, setCreation] = useState('Creation');

    const handleCreateButtonPress = () => {
        setCreation('Creation Created')
    }

    return (
        <BaseScreen>
            <Content>
                <Text>{creation}</Text>
                <Button onPress={handleCreateButtonPress} buttonText={"Create"} />
            </Content>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    createButton: {
        borderWidth: 2
    }
})

export default CreateScreen;