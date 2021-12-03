import React from "react";
import {View,Text,StyleSheet } from 'react-native';
import styles from "./style";

const transactionCard = (props) =>{
    return (
        <View style = {styles.card}>
            <View 
            
            style = {styles.cardContent}>
                
                {props.children}
            </View>
        </View>
    );
};

export default transactionCard