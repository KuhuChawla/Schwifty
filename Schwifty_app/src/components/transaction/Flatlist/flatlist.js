import React from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlightBase, View, Image } from 'react-native';
import Card from '../transactionCard/transactionCard';
import styles from './style';
import { TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

const icon_size = 50;
const TransactionRecords = ({ navigation, email }) => {
  console.log(email);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[
          { key: 'Devin', txnID: 1 },
          { key: 'Dan', txnID: 2 },
          { key: 'Dominic', txnID: 3 },
          { key: 'Jackson', txnID: 4 },
          { key: 'James', txnID: 5 },
          { key: 'Joel', txnID: 6 },
          { key: 'John', txnID: 7 },
          { key: 'Jillian', txnID: 8 },
          { key: 'Jimmy', txnID: 9 },
          { key: 'Julies', txnID: 10 },
          { key: 'Devins', txnID: 11 },
          { key: 'Dans', txnID: 12 },
          { key: 'Dominics', txnID: 13 },
          { key: 'Jacksons', txnID: 14 },
          { key: 'Jamess', txnID: 15 },
          { key: 'Joels', txnID: 16 },
          { key: 'Johns', txnID: 17 },
          { key: 'Jillians', txnID: 18 },
          { key: 'Jimmys', txnID: 19 },
          { key: 'Juliess', txnID: 20 },
        ]}
        renderItem={({ item }) => {
          return <TouchableHighlight onPress={() => navigation.navigate('PaymentPage', {
            txnID: item.txnID
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
                  <Text style={{ color: '#d2d2d2', paddingTop: 4, fontSize: 13 }}>  11:42 pm</Text>
                </View>
              </View>
            </Card></TouchableHighlight>
        }}
      />
    </View>
  );
}

export default TransactionRecords;