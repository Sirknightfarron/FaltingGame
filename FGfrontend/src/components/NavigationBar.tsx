import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";


function NavigationBar({ route }) {
    const navigation = useNavigation();
    const handleBackButtonPress = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.navBar}>{
                route.name === "Overview" ?
                    <View></View> :
                    <Button onPress={ handleBackButtonPress } buttonText="Back" cstyle={ styles.backButton }></Button>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: '#e0e0e0',
        height: 50
    },
    backButton: {
        backgroundColor: '#ddc',
        borderRadius: 12,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: '100%',
    }
})

export default NavigationBar;