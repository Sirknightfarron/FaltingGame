import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';

/**
 * 
 * @param label The label of the Checkbox
 * @param children Toggle Visibility of the children on and of 
 * @returns 
 */
const CustomVisibilityCheckbox = ({ label, children, containerStyle }) => {
    const [isChecked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!isChecked)
    }

    return (
        <View style={styles.container ? containerStyle : styles.container}>
            <TouchableOpacity onPress={toggleChecked}>
                <View style={styles.checkboxContainer}>
                    <View style={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked} />
                    <Text style={styles.checkboxLabel}>{label}</Text>
                </View>
            </TouchableOpacity>
                {isChecked && children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxChecked: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: 'green',
        backgroundColor: 'green',
        marginRight: 10,
    },
    checkboxUnchecked: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 16,
    },
});

export default CustomVisibilityCheckbox;
