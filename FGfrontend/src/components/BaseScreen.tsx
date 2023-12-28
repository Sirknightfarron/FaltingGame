import { StyleSheet, View } from "react-native";
import NavigationBar from "./NavigationBar";
import { ReactNode } from "react";

type BaseScreenProps ={
    children: ReactNode,
    route: any;
}

const BaseScreen = ({ children, route }: BaseScreenProps) => {
    return (
    <View style={styles.baseContainer}>
        <View>{children}</View>
        <View style={styles.navBar}>
            <NavigationBar route={route}/>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    baseContainer: {
        padding: 8,
        borderWidth: 1,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    navBar: {
        justifyContent: 'flex-end',
        
    }
})

export default BaseScreen;