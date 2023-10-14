import { StyleSheet, View } from "react-native";
import NavigationBar from "./NavigationBar";

function BaseScreen ({children, navigation}) {
return (
    <View>
        <View>{children}</View>
        <NavigationBar navigation={navigation}></NavigationBar>
    </View>
);
}

const styles = StyleSheet.create({
    content: {
        padding: 5
    }
})

export default BaseScreen;