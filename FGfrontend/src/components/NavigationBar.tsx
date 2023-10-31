import { View } from "react-native";
import BackButton from "./BackButton";

function NavigationBar ({navigation, screenName}){
return (
    <View style={styles.container}>
        <BackButton onPress={navigation.goBack} screenName={screenName}></BackButton>
    </View>
);
}
const styles = {
    container: {

    },
    button: {

    }
}
export default NavigationBar;