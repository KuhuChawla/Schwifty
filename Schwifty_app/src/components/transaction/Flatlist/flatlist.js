import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlightBase, View, Image } from 'react-native';
import Card from '../transactionCard/transactionCard';
import styles from './style';
import { TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import Loading from '../../common/loading';

const icon_size = 50;
const TransactionRecords = ({ navigation, email }) => {
  const [transactions, setTransaction] = React.useState([
    {key:'test', name:'test', id:"1231"}
  ]);
  const [isLoading, setLoading] = React.useState(false);
  const fetchTransactions = async () => {
    axios.get("http://10.0.2.2:5000/user/" + email).then((res) => {
      console.log(res.data);
      const customerId = res.data.id;
      return customerId;
    }).then((customerId) => {
      axios.get("http://10.0.2.2:5000/transaction/allPendingTransactions/" + customerId).then((res) => {
        console.log(res.data);
        setTransaction(res.data.transactions);
        setLoading(false);
      });
    })
  }

  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? <Loading /> : <FlatList
        showsVerticalScrollIndicator={false}
        data={transactions}
        renderItem={({ item }) => {
          return <TouchableHighlight onPress={() => navigation.navigate('PaymentPage', {
            txnID: item.id
          })}>
            <Card>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                  <Image source={require('./icon.png')}
                    style={{ width: icon_size, height: icon_size, borderRadius: icon_size }} />
                  <View style={{ justifyContent: 'center', paddingLeft: 10, flexDirection: 'column' }}>
                    <Text style={styles.text}>{item.key}</Text>
                    <Text style={{ color: '#d2d2d2', paddingTop: 4, fontSize: 13 }}>30/11/21</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.text}>&#8377; {"1200"}</Text>
                  <Text style={{ color: '#d2d2d2', paddingTop: 4, fontSize: 13 }}> </Text>
                </View>
              </View>
            </Card></TouchableHighlight>
        }}
      />}

    </View>
  );
}

export default TransactionRecords;