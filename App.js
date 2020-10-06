import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import StartGameScreen from "./pages/StartGameScreen";
import GameScreen from "./pages/GameScreen";
import GameOverScreen from "./pages/GameOverScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);
  };

  const gameOverHandler = (numRounds) => {
    setRounds(numRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && rounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (rounds > 0) {
    content = <GameOverScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title="GuessDigit" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
