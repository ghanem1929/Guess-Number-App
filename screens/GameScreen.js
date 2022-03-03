import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Button, View, Text, Alert } from "react-native";
import Card from "../components/Card";
import NumberBox from "../components/NumberBox";

//fanction that return a number between 1 and 99 execept the number entred by player
const guessNamberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndmNamber = Math.floor(Math.random() * (max - min)) + min;

  if (rndmNamber === exclude) {
    return guessNamberBetween(min, max, exclude);
  } else return rndmNamber;
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    guessNamberBetween(1, 100, props.userChoice)
  );

  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "LOWER" && currentGuess < props.userChoice) ||
      (direction === "GREATER" && currentGuess > props.userChoice)
    ) {
      Alert.alert("don't lie ...!", "you know that is wrong ...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "LOWER") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = guessNamberBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.CardContainer}>
        <Text>Opponent's Guess</Text>
        <NumberBox>{currentGuess}</NumberBox>
        <View style={styles.btnContainer}>
          <Button
            title="LOWER"
            onPress={nextGuessHandler.bind(this, "LOWER")}
          />
          <Button
            title="GREATER"
            onPress={nextGuessHandler.bind(this, "GREATER")}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    width: 300,
    maxWidth: "80%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  CardContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default GameScreen;
