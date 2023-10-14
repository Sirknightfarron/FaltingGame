import { Text, View } from "react-native";
import Button from "./Button";

function BackButton ({onPress}) {
return (
    <Button onPress={onPress} >
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