import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Card from '../Card/Card';
import { Ionicons } from '@expo/vector-icons';
import HorizontalList from '../HorizontalList/HorizontalList';

const Dashboard = () => {

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
                    <Text style={styles.card1Heading}>Available Balance</Text>
                    <Text style={styles.card1Balance}>Rs. 2000</Text>
                    <Text style={styles.card1SeeDetails}>See Details</Text>
                </View>
            </Card>
            <Card>
                <View style={styles.card2}>
                    <View>
                        <Ionicons name="md-checkmark-circle" size={33} color="white" style={styles.threeIcons} />
                        <Text style={styles.threeIconsText}>Top Up</Text>
                    </View>
                    <View>
                        <Ionicons name="md-checkmark-circle" size={33} color="white" style={styles.threeIcons} />
                        <Text style={styles.threeIconsText}>Top Up</Text>
                    </View>
                    <View>
                        <Ionicons name="md-checkmark-circle" size={33} color="white" style={styles.threeIcons} />
                        <Text style={styles.threeIconsText}>Top Up</Text>
                    </View>
                </View>
            </Card>
            <Card>
                <View style={styles.card3}>
                    <Text style={styles.card3Content}>This is Card 3</Text>
                </View>
            </Card>
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