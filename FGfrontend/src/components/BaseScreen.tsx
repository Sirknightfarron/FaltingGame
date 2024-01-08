import { Dimensions, StyleSheet, View } from "react-native";
import NavigationBar from "./NavigationBar";
import { ReactNode } from "react";

type BaseScreenProps = {
    children: ReactNode,
    route: any,
    style?: any
}

const { width, height } = Dimensions.get('window');
const fixedHeight = height
const fixedWidth = width

const BaseScreen = ({ children, route, style }: BaseScreenProps) => {
    return (
        <View style={
            style === undefined ?
                style :
                [styles.baseContainer, { width: fixedWidth, height: fixedHeight }]
        }>
            <View>{ children }</View>
            <View style={ styles.navBar }>
                <NavigationBar route={ route } />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    baseContainer: {
        borderWidth: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center',
    },
    navBar: {
        justifyContent: 'flex-end',
    }
})

export default BaseScreen;