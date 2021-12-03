import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import axios from 'axios';
import styles from './styles';
import Button from '../../components/common/button';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './homeStack';
import TransactionStackScreen from './transactionStack';
import NotificationStackScreen from './notificationStack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      email: '',
      error: ''
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.AndroidSafeArea}>
        {/* <View style={styles.container}>
          <Button onPress={this.props.deleteJWT}>
            Log Out
          </Button>
        </View> */}
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Transactions') {
                iconName = focused ? 'receipt' : 'receipt-outline';
              } else if (route.name === 'Notifications') {
                iconName = focused ? 'notifications' : 'notifications-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#d9d9d9',
            tabBarInactiveTintColor: '#d9d9d9',
            headerShown: false
          })} tabBarOptions={{
            // activeTintColor: 'pink',
            // inactiveTintColor: 'pink',
            activeBackgroundColor: '#272847',
            inactiveBackgroundColor: '#171826',
         }}>
            <Tab.Screen name="Home">
              {() => <HomeStackScreen deleteJWT={this.props.deleteJWT} />}
            </Tab.Screen>
            <Tab.Screen name="Transactions" component={TransactionStackScreen} />
            <Tab.Screen name="Notifications" component={NotificationStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}