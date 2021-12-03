import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./style"
import Topbar from './TopBar/TopBar';
import Dashboard from './Dashboard/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = ({ navigation }) => {
    return (
        <View style={styles.homeTopbar}>
            <Topbar navigation={navigation}/>
            <Dashboard navigation={navigation}/>
        </View>
    );
}

export default Home;