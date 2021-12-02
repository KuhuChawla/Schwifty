import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Card from '../Card/Card';

const HorizontalList = (props) => {
    const item = props.item;
    return (
        <View style={styles.horizontalCard}>
            <View style={styles.horizontalCardContent}>
                <Text style={styles.horizontalListName}> {item.name} </Text>
                <Text style={styles.horizontalListMoney}> {item.key} </Text>
            </View>
        </View>
    );
}

export default HorizontalList;