import React from "react";
import { StyleSheet, Text, TouchableHighlightBase, View, Image, SafeAreaView } from 'react-native';
import AppB from "./button";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const icon_size = 150;
const Payment = ({ navigation, route }) => {
    const txnID = route.params.txnID
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 40, paddingBottom: 50, color: '#fff', fontWeight: '700' }}> $1200 </Text>
                <Text style={{ fontSize: 40, paddingBottom: 50, color: '#fff', fontWeight: '700' }}> {txnID} </Text>
                <Image source={require('./payment-method.png')}
                    style={{ width: icon_size, height: icon_size, borderRadius: icon_size }} />
                <AppB />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2a2b4d',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Payment