import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState(); //number entred by the user
  const [guessRounds, setGuessRounds] = useState(0); //number of guesses when the game is over

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const GameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };
  // conditionnal navigation screens
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={GameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} />;
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header Title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
