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
                    <View style={styles.navBar}></View> :
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
        width: '100%',
        backgroundColor: '#dec',
        height: 50
    },
    backButton: {
        backgroundColor: '#ddc',
        borderRadius: 6,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent:'flex-start',
        height: '100%',
        paddingHorizontal: 20
    },
    
})

export default NavigationBar;