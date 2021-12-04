import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
import TransactionRecords from "../../../../components/transaction/Flatlist/flatlist";
import Charts from "../../../../components/transaction/graphs/chart";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

const TransHistory = ({ email }) => {
  const navigation = useNavigation();
  const deviceHeight = Math.round(Dimensions.get('window').height);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
          height: deviceHeight - 790,
          width: '100%',
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{
          color: '#2a2b4d',
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
      <TransactionRecords navigation={navigation} email={email}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TransHistory;