import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TransactionRecords from "../../../../components/transaction/Flatlist/flatlist";
import Charts from "../../../../components/transaction/graphs/chart";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TransHistory = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Charts/>
            <TransactionRecords navigation={navigation}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a2b4d',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default TransHistory;