import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
    onPress: () => void;
    buttonText: string;
    style?: any;
}

const Button = ({ onPress, buttonText, style }: ButtonProps ) => {
return (
    <View style={style === undefined ? styles.buttonContainer : style}>
        <Pressable onPress={onPress}>
            <Text>{buttonText}</Text>
        </Pressable>
    </View>
);
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderWidth: 1,
        borderRadius: 8,
        padding: 4,
    }
})
export default Button;