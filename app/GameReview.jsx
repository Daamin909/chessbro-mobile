import { ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import Input from "../src/components/Input/Input";
import Board from "../src/components/Board/Board";
import Controls from "../src/components/Input/Controls";
import EvalBar from "../src/components/Evaluation/EvalBar";
import QualityStats from "../src/components/Review/QualityStats";
import Opening from "../src/components/Review/Opening";
import ReportCard from "../src/components/Review/ReportCard";
import PlayerInfo from "../src/components/Players/PlayerInfo";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import defaultPGN from "../src/common/var/pgn";
import Accuracy from "../src/components/Review/Accuracy";
import PlayerIcon from "../src/components/Players/PlayerIcon";
import { Button } from "react-native-paper";

const GameReview = () => {
  const bottomSheetRef = useRef(null);
  const handleClosePress = () => bottomSheetRef.current.close();
  const handleOpenPress = () => bottomSheetRef.current.expand();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [PGN, setPGN] = useState(defaultPGN);
  const [evaluation, setEvaluation] = useState({
    type: "cp",
    value: 0,
  });
  const [underReview, setUnderReview] = useState(false);
  const [moveNumber, setMoveNumber] = useState(0);
  const [currentFEN, setCurrentFEN] = useState("");
  useEffect(() => {
    if (isSheetOpen) {
      handleOpenPress();
    } else {
      handleClosePress();
    }
  }, [isSheetOpen]);
  useEffect(() => {
    try {
      setCurrentFEN(PGN.move_evaluations[moveNumber].fen);
      setEvaluation(PGN.move_evaluations[moveNumber].eval);
    } catch {}
  }, [PGN, moveNumber]);
  return (
    <>
      <ScrollView contentContainerStyle={styles.gameReview}>
        {!underReview && (
          <Input
            setPGN={setPGN}
            setUnderReview={setUnderReview}
            setMoveNumber={setMoveNumber}
            setIsSheetOpen={setIsSheetOpen}
          />
        )}
        {underReview && (
          <>
            <Opening openingName={PGN.move_evaluations[moveNumber].opening} />
            {PGN.move_evaluations[moveNumber].move_type && (
              <QualityStats
                moveType={PGN.move_evaluations[moveNumber].move_type}
                move={PGN.move_evaluations[moveNumber].move}
              />
            )}
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
          <View>
            <PlayerInfo
              name={PGN.info.black_player}
              rating={PGN.info.black_rating}
              isWhite={false}
            />
            <Board currentFEN={currentFEN} />
            <PlayerInfo
              name={PGN.info.white_player}
              rating={PGN.info.white_rating}
              isWhite={true}
            />
          </View>
        </View>
        <Controls
          moveNumber={moveNumber}
          setMoveNumber={setMoveNumber}
          numberOfMoves={PGN.move_evaluations.length}
        />
      </ScrollView>
      <BottomSheet ref={bottomSheetRef}>
        <BottomSheetView style={styles.contentContainer}>
          <Button
            mode="text"
            icon={"close"}
            onPress={handleClosePress}
          ></Button>
          <PlayerIcon playerInfo={PGN.info} />
          <Accuracy accuracy={PGN.accuracy} />
          <ReportCard move_numbers={PGN.number_of_move_types} />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  gameReview: {
    backgroundColor: "#064162",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },
  boardContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    padding: 0,
    alignItems: "center",
    backgroundColor: "#064162",
  },
});

export default GameReview;
