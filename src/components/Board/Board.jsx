import ChessBoard from "react-native-chessboard";
import useScreen from "../../hooks/useScreen";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
import { useEffect, useRef } from "react";
import { View } from "react-native";

const Board = ({ currentFEN }) => {
  configureReanimatedLogger({
    level: ReanimatedLogLevel.error,
    strict: false,
  });
  const SCREEN_WIDTH = useScreen().width;
  const chessboardRef = useRef(null);
  useEffect(() => {
    const changePos = async () => {
      await chessboardRef.current?.resetBoard(currentFEN);
    };
    changePos();
  }, [currentFEN]);
  return (
    <View>
      <ChessBoard
        ref={chessboardRef}
        gestureEnabled={false}
        colors={{
          white: "#E3EEF4",
          black: "#072434",
        }}
        boardSize={Math.floor(SCREEN_WIDTH / 40) * 39}
      />
    </View>
  );
};

export default Board;
