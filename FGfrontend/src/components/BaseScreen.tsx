import { StyleSheet, View } from "react-native";
import NavigationBar from "./NavigationBar";

function BaseScreen ({children, navigation, screenName, route}) {
return (
    <View>
        <View>{children}</View>
        <NavigationBar navigation={navigation} screenName={screenName}></NavigationBar>
    </View>
);
}

const styles = StyleSheet.create({
    content: {
        padding: 5
    }
})

export default BaseScreen;