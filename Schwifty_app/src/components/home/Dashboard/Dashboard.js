import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import Card from '../Card/Card';
import { Ionicons } from '@expo/vector-icons';
import HorizontalList from '../HorizontalList/HorizontalList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Dashboard = ({ navigation }) => {

    const details = [
        { name: 'Luisi', key: '1' },
        { name: 'Vanesa', key: '2' },
        { name: 'Lark', key: '3' },
        { name: 'Tony', key: '4' },
        { name: 'Gabriel', key: '5' },
        { name: 'Vice', key: '6' }
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
            <Card>
                <View style={styles.card2}>
                    <View style={styles.threeIconsSingleContainer}>
                        <Ionicons name="menu" size={33} color="white" style={styles.threeIcons} />
                        <Text style={styles.threeIconsText}>History</Text>
                    </View>
                    <View style={styles.threeIconsSingleContainer}>
                        <Ionicons name="arrow-redo-circle-outline" size={34} color="white" style={styles.threeIcons} />
                        <Text style={styles.threeIconsText}>Pay</Text>
                    </View>
                    <View style={styles.threeIconsSingleContainer}>
                    <Ionicons name="menu" size={33} color="white" style={styles.threeIcons} />
                        <Text style={styles.threeIconsText}>Top Up</Text>
                    </View>
                </View>
            </Card>
            <TouchableOpacity onPress={() => navigation.navigate('Schwifty Score')}>
                <Card>
                    <View style={styles.card3}>
                        <Text style={styles.card3Content}>Schwifty Score</Text>
                    </View>
                </Card>
            </TouchableOpacity>
            <View>
                <Text style={styles.cashAndCheck}>
                    Cash &#38; Checking
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