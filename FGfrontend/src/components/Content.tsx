import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type ContentProps = {
    children: ReactNode;
    style?: any;
}

const Content = ({ children, style }: ContentProps) => {
    return (
        <View style={styles === undefined ? style : styles.content}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20,
        width: '100%'
    },
});

export default Content;