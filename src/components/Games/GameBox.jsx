import { StyleSheet, View } from "react-native";
import ChessBoard from "react-native-chessboard";

const GameBox = () => (
  <View style={styles.gamebox}>
    <ChessBoard />
  </View>
);
export default GameBox;

const styles = StyleSheet.create({
  gamebox: {
    flex: 1,
    height: 2000,
  },
});
