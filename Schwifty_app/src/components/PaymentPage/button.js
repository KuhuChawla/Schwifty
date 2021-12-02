import React from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const AppB = () => {
  return (
    <View style={styles.screenContainer}>
      <AppButton title="PAY NOW" size="sm" backgroundColor="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    paddingTop: 80
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#6a82f6",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  appButtonText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default AppB;