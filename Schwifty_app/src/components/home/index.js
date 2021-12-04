import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./style"
import Topbar from './TopBar/TopBar';
import Dashboard from './Dashboard/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const Home = ({ isMerchant }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.homeTopbar}>
            <Topbar navigation={navigation}/>
            <Dashboard navigation={navigation} isMerchant={isMerchant}/>
        </View>
    );
}

export default Home;