import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./style"
import Topbar from './TopBar/TopBar';

const Home = () => {
    return (
        <View style={styles.homeTopbar}>
            <Topbar />
        </View>
    );
}

export default Home;