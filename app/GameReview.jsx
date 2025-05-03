import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../src/components/Input/Input";
import Board from "../src/components/Board/Board";
import Controls from "../src/components/Input/Controls";
import { useEffect, useState } from "react";
import EvalBar from "../src/components/Evaluation/EvalBar";

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
        fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      },
      {
        fen: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1",
      },
      {
        fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6 0 2",
      },
      {
        fen: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2",
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
  const evaluation = {
    type: "cp",
    value: 180,
  };
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
        <EvalBar evaluation={evaluation} />
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
    alignItems: "center",
    flexDirection: "row",
  },
});

export default GameReview;
