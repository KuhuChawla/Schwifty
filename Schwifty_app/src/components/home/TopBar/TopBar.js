import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./style"
import { Ionicons } from '@expo/vector-icons';

const Topbar = () => {
    return (
        <View style={styles.topbar}>
            <View style={styles.left}>
                <Text style={styles.topLeft}>20 January 2021</Text>
                <Text style={styles.bottomLeft}>Hi! Daniel</Text>
            </View>
            <View style={styles.right}>
                <Ionicons name="md-checkmark-circle" size={60} color="white" />
            </View>
        </View>
    );
}

export default Topbar;