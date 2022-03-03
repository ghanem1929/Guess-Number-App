import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberBox from "../components/NumberBox";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const StartGameScreen = (props) => {
  const [entredValue, setEntredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const numberInputHandler = (inputText) => {
    setEntredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resethandler = () => {
    setEntredValue("");
    setConfirmed(false);
  };
  const confirmHandler = () => {
    let chosenNumber = parseInt(entredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "invalid namber",
        "number has to be a number between 1 and 99.",
        [{ text: "get it!", style: "destructive", onPress: resethandler }]
      );
    }

    setEntredValue("");
    setSelectedNumber(chosenNumber);
    setConfirmed(true);
    Keyboard.dismiss();
  };

  let comnfirmOutput;

  if (confirmed) {
    comnfirmOutput = (
      <Card style={styles.confirmContainer}>
        <Text>you chose the number</Text>
        <NumberBox>{selectedNumber}</NumberBox>
        <Button
          title="let's get started"
          color={Colors.mainColor}
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.Title}>Start a New Game !</Text>
        <View style={{ justifyContent: "flex-start", flex: 1 }}>
          <Card style={styles.inputContainer}>
            <Text style={{ color: "white" }}>Select a Number</Text>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={numberInputHandler}
              value={entredValue}
            />
            <View style={styles.btnContainer}>
              <View style={styles.button}>
                <Button
                  title="reset"
                  color={Colors.secondColor}
                  onPress={resethandler}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="confirm"
                  color={Colors.thirdColor}
                  onPress={confirmHandler}
                />
              </View>
            </View>
          </Card>
          {comnfirmOutput}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  Title: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    backgroundColor: Colors.mainColor,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 10,
  },
  button: {
    width: 100,
  },
  input: {
    textAlign: "center",
  },
  confirmContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameScreen;
