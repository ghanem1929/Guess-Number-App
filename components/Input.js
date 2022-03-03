import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    height: 40,
    marginVertical: 10,
    fontSize: 20,
    color: "white",
    fontSize: 26,
  },
});

export default Input;
