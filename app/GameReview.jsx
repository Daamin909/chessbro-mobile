import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../src/components/Input/Input";
import Board from "../src/components/Board/Board";
import Controls from '../src/components/Input/Controls';

const GameReview = () => {
  return (
    <ScrollView contentContainerStyle={styles.gameReview}>
      <Input />
      <View style={styles.boardContainer}>
        <Board />
      </View>
      <Controls />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gameReview: {
    backgroundColor: "#064162",
    display: "flex",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#e3eef4",
    borderRadius: 10,
    marginVertical: "5%"
  },
});

export default GameReview;
