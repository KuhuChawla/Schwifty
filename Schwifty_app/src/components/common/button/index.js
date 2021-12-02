import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ onPress, children }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;