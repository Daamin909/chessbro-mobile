import ChessBoard from "react-native-chessboard";
import useScreen from "../../hooks/useScreen";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
import { useEffect, useRef } from "react";

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
    <ChessBoard
      ref={chessboardRef}
      gestureEnabled={false}
      colors={{
        white: "#E3EEF4",
        black: "#072434",
      }}
      boardSize={Math.floor(SCREEN_WIDTH / 8) * 7}
    />
  );
};

export default Board;
