import { View } from "react-native";
import BackButton from "./BackButton";

function NavigationBar ({navigation}) {
return (
    <View style={styles.container}>
        <BackButton onPress={navigation.goBack}></BackButton>
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