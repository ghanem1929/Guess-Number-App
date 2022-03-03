import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const NumberBox = (props) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    borderWidth: 2,
    borderColor: Colors.fourthColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});

export default NumberBox;
