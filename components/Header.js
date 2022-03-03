import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: 36,
    height: 90,
    backgroundColor: Colors.secondColor,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
