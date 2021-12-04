import React from "react";
import { StyleSheet, Text, TouchableHighlightBase, View, Image, SafeAreaView, Linking } from 'react-native';
import AppB from "./button";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";
import { WebView } from 'react-native';
const icon_size = 150;
const Payment = ({ navigation, route }) => {
  const txnID = route.params.txnID

  return (
    <SafeAreaView style={styles.container}>
       <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 40, paddingBottom: 50, color: '#2a2b4d', fontWeight: '700' }}> ₹1200 </Text>
        <Text style={{ fontSize: 40, paddingBottom: 50, color: '#2a2b4d', fontWeight: '700' }}>transaction ID {txnID} </Text>
        <Image source={require('./payment-method.png')}
          style={{ width: icon_size, height: icon_size, borderRadius: icon_size }} />
        <AppB title={"pay now"} onPress={() => Linking.openURL("https://rzp.io/i/jcwlBmMO")} />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Payment