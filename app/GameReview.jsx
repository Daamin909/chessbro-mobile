import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../src/components/Input/Input";
import Board from "../src/components/Board/Board";
import Controls from "../src/components/Input/Controls";
import { useEffect, useState } from "react";

const GameReview = () => {
  const [PGN, setPGN] = useState({
    accuracy: { black: 0, white: 0 },
    info: {
      black_player: "Black",
      black_rating: "??",
      white_player: "White",
      white_rating: "??",
    },
    move_evaluations: [
      {
        fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
      },
    ],
    number_of_move_types: {
      b: {
        best_move: null,
        blunder: null,
        book_move: null,
        excellent: null,
        good: null,
        inaccuracy: null,
        mistake: null,
      },
      w: {
        best_move: null,
        blunder: null,
        book_move: null,
        excellent: null,
        good: null,
        inaccuracy: null,
        mistake: null,
      },
    },
  });
  const [moveNumber, setMoveNumber] = useState(0);
  const [currentFEN, setCurrentFEN] = useState("");
  useEffect(() => {
    try {
      setCurrentFEN(PGN.move_evaluations[moveNumber].fen);
    } catch {}
  }, [PGN, moveNumber]);

  return (
    <ScrollView contentContainerStyle={styles.gameReview}>
      <Input setPGN={setPGN} />
      <View style={styles.boardContainer}>
        <Board currentFEN={currentFEN} />
      </View>
      <Controls
        moveNumber={moveNumber}
        setMoveNumber={setMoveNumber}
        numberOfMoves={PGN.move_evaluations.length}
      />
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
    marginVertical: "5%",
  },
});

export default GameReview;
