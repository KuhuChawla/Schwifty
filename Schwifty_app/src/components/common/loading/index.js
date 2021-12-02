import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const Loading = ({ size }) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={size} color={"#000"}/>
    </View>
  );
};

export default Loading;