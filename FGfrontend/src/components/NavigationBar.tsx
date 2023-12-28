import { StyleSheet, View } from "react-native";
import {  useNavigation } from "@react-navigation/native";
import Button from "./Button";


function NavigationBar ( { route } ) {
    const navigation = useNavigation();
    const handleBackButtonPress = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.navBar}>
            {
                route.name === "Overview" ?
                <View></View> : 
                <Button onPress={handleBackButtonPress} buttonText="Back"></Button>
            }
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})

export default NavigationBar;