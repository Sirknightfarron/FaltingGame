import { StyleSheet, Text } from "react-native";
import Button from "./Button";
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: { userId: string };
    Profile: { userId: string };
};

type BackButtonProps = {
    screenName: keyof RootStackParamList;
    onPress: () => void;
}

type ScreenNavigationProp<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>;
type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>

function BackButton({ screenName }: BackButtonProps) {
    const navigation = useNavigation();
    const handleBackButtonPress = () => {
        navigation.goBack
    }

    return (
        <Button 
        style={styles.button} 
        onPress={handleBackButtonPress} 
        buttonText="Back" />
    );
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
    }
})

export default BackButton;