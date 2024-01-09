import { StyleSheet, View } from "react-native";
import NavigationBar from "./NavigationBar";
import { ReactNode } from "react";
import Content from "./Content";

type BaseScreenProps = {
    children: ReactNode,
    route: any,
    style?: any
}


const BaseScreen = ({ children, route, style }: BaseScreenProps) => {
    return (
        <View style={
            style === undefined ?
                styles.baseContainer :
                style
        }>
            <Content>{children}</Content>
            <View style={styles.navBar}>
                <NavigationBar route={route} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        backgroundColor: '#dec',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%'
    },
    navBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#e0e0e0',
        borderBottomColor: '#ccc',
        height: 50
    }
})

export default BaseScreen;