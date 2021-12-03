import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const Input = ({ label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  multiline,
  numberOfLines,
  editable = true,
  keyboardType = 'default' }) => {

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.inputStyle}
        editable={editable}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;