import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import Card from '../Card/Card';
import { Ionicons } from '@expo/vector-icons';
import HorizontalList from '../HorizontalList/HorizontalList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Dashboard = ({ navigation, isMerchant }) => {

    const details = [
        { name: 'Luisi', key: '100',},
        { name: 'Vanesa', key: '150' },
        { name: 'Lark', key: '332' },
        { name: 'Tony', key: '400' },
        { name: 'Gabriel', key: '505' },
        { name: 'Vice', key: '678' }
    ]

    return (
        <View style={styles.dashboard}>
            <Card>
                <View style={styles.card1}>
                    <Text style={styles.card1Heading}>Pending Balance</Text>
                    <Text style={styles.card1Balance}>&#8377; 2000</Text>
                    <Text style={styles.card1SeeDetails}>See Details</Text>
                </View>
            </Card>
            {isMerchant ?<TouchableOpacity onPress={() => navigation.navigate('Add Payment')}>
                <Card>
                    <View style={styles.card3}>
                        <Text style={styles.card3Content}>Add Payment</Text>
                    </View>
                </Card>
            </TouchableOpacity>:<TouchableOpacity onPress={() => navigation.navigate('User Acceptance')}>
                <Card>
                    <View style={styles.card3}>
                        <Text style={styles.card3Content}>Check Pending</Text>
                    </View>
                </Card>
            </TouchableOpacity>}
            <TouchableOpacity onPress={() => navigation.navigate('Schwifty Score')}>
                <Card>
                    <View style={styles.card3}>
                        <Text style={styles.card3Content}>Schwifty Score</Text>
                    </View>
                </Card>
            </TouchableOpacity>
            <View>
                <Text style={styles.cashAndCheck}>
                    Recent Transactions
                </Text>
            </View>
            <FlatList
                horizontal
                scrollEnabled
                alwaysBounceHorizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.key}
                data={details}
                renderItem={({ item }) => (
                    <View key={item.key}>
                        <HorizontalList item={item} />
                    </View>
                )}
            />
        </View>
    );
}

export default Dashboard;