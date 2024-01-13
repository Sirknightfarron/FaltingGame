import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
    onPress: () => void;
    buttonText: string;
    cstyle?: any;
}
// cstyle: custom style - might refactor later
const Button = ({ onPress, buttonText, cstyle }: ButtonProps) => {
    return (
        <View style={cstyle === undefined ? styles.buttonContainer : cstyle}>
            <Pressable onPress={onPress} hitSlop={50} >
                <Text style={styles.buttonTitle}>{buttonText}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 2,
        borderRadius: 12,
        padding: 12,
    },
    buttonTitle: {
        fontWeight: 'bold',
    },
    buttonStyle: {
        borderWidth: 2,
        borderRadius: 12,
        padding: 12,
    },
})

export default Button;