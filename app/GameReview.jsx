import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Input from "../src/components/Input/Input";
import Board from "../src/components/Board/Board";
import Controls from "../src/components/Input/Controls";
import EvalBar from "../src/components/Evaluation/EvalBar";
import QualityStats from "../src/components/Review/QualityStats";
import Opening from "../src/components/Review/Opening";
import ReportCard from "../src/components/Review/ReportCard";

const GameReview = () => {
  const [PGN, setPGN] = useState({
    accuracy: {
      black: 0,
      white: 0,
    },
    number_of_move_types: {
      w: {
        best_move: "??",
        blunder: "??",
        book_move: "??",
        excellent: "??",
        good: "??",
        inaccuracy: "??",
        mistake: "??",
      },
      b: {
        best_move: "??",
        blunder: "??",
        book_move: "??",
        excellent: "??",
        good: "??",
        inaccuracy: "??",
        mistake: "??",
      },
    },
    move_evaluations: [
      {
        fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        opening: "Starting Position",
        eval: {
          type: "cp",
          value: "0.3",
        },
        move_type: null,
        move: null,
      },
    ],
    info: {
      white_player: "White",
      black_player: "Black",
      white_rating: "??",
      black_rating: "??",
    },
  });
  const [evaluation, setEvaluation] = useState({
    type: "cp",
    value: 0,
  });
  const [underReview, setUnderReview] = useState(true);
  const [moveNumber, setMoveNumber] = useState(0);
  const [currentFEN, setCurrentFEN] = useState("");
  useEffect(() => {
    try {
      setCurrentFEN(PGN.move_evaluations[moveNumber].fen);
      setEvaluation(PGN.move_evaluations[moveNumber].eval);
    } catch {}
  }, [PGN, moveNumber]);
  return (
    <ScrollView contentContainerStyle={styles.gameReview}>
      {!underReview && (
        <Input
          setPGN={setPGN}
          setUnderReview={setUnderReview}
          setMoveNumber={setMoveNumber}
        />
      )}
      {underReview && (
        <>
          <ReportCard move_numbers={PGN.number_of_move_types} />
          <Opening openingName={PGN.move_evaluations[moveNumber].opening} />
          <QualityStats
            moveType={PGN.move_evaluations[moveNumber].move_type}
            move={PGN.move_evaluations[moveNumber].move}
          />
        </>
      )}
      <View style={styles.boardContainer}>
        <EvalBar
          evaluation={
            evaluation.type === "cp"
              ? {
                  type: evaluation.type,
                  value: evaluation.value * 100,
                }
              : evaluation
          }
        />
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
