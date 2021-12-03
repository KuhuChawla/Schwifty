import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
import TransactionRecords from "../../../../components/transaction/Flatlist/flatlist";
import Charts from "../../../../components/transaction/graphs/chart";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TransHistory = ({ navigation }) => {
  const deviceHeight = Math.round(Dimensions.get('window').height);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
          height: deviceHeight - 680,
          width: '100%',
          backgroundColor: '#2a2b4d',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{
          color: 'white',
          // padding: 10,
          fontSize: 20,
          // marginTop: 10,
          // marginBottom: -3,
          fontWeight: 'bold'
        }}>
          Transaction History
        </Text>
      </View>
      <Charts />
      <TransactionRecords navigation={navigation} />
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