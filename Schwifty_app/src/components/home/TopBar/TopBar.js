import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View,Image } from 'react-native';
import styles from "./style"
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Topbar = ({ navigation }) => {
    return (
        <View style={styles.topbar}>
            <View style={styles.left}>
                <Text style={styles.topLeft}>20 January 2021</Text>
                <Text style={styles.bottomLeft}>Hi! Daniel</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                <View style={styles.right}>
                    {/* <Text style={styles.right}><Ionicons name="person" size={32} color="green" /></Text> */}
                    <Image source={require('../../../../assets/Profile.png')}
                    style = {{width:55,height:55}}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Topbar;