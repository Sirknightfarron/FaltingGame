import { View } from "react-native";
import BaseScreen from "../components/BaseScreen";

function OverviewScreen ({navigation, route}) {
    return (
    <BaseScreen navigation={navigation} screenName={"Overview"}>
        <View></View>
    </BaseScreen>
);
}

export default OverviewScreen;