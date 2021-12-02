import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./style"
import Topbar from './TopBar/TopBar';
import Dashboard from './Dashboard/Dashboard';

const Home = () => {
    return (
        <View style={styles.homeTopbar}>
            <Topbar />
            <Dashboard />
        </View>
    );
}

export default Home;