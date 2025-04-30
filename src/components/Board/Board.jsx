import ChessBoard from "react-native-chessboard";
import useScreen from "../../hooks/useScreen";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

const Board = ({ currentFEN }) => {
  console.log(currentFEN);
  configureReanimatedLogger({
    level: ReanimatedLogLevel.error,
    strict: false,
  });
  const SCREEN_WIDTH = useScreen().width;
  return (
    <ChessBoard
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
