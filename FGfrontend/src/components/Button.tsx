import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
    onPress: () => void;
    buttonText: string;
    style?: any;
}

const Button = ({ onPress, buttonText, style }: ButtonProps) => {
    return (
        <View style={ style === undefined ? style : styles.buttonContainer }>
            <Pressable onPress={ onPress } style={ styles.buttonStyle }>
                <Text style={ styles.buttonTitle }>{ buttonText }</Text>
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
        fontWeight: 'bold'
    },
    buttonStyle: {
        borderWidth: 2,
        borderRadius: 12,
        padding: 12
    },
})

export default Button;