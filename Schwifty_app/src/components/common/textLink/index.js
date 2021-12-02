import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TextLink = ({ onPress, children }) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextLink;