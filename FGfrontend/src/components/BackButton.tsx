import { Text, View } from "react-native";
import Button from "./Button";
import { useNavigation } from '@react-navigation/native';

function BackButton ({onPress, screenName}) {
    const navigation = useNavigation();
return (
    <Button onPress={() => navigation.navigate(screenName)} >
        <View style={styles.button}>
            <Text>Back</Text>
        </View>
    </Button>
);
}
const styles = {
    button: {
        
    }
}
export default BackButton;