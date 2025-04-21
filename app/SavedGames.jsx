import { StyleSheet, Text, View } from "react-native";
import GameBox from "../src/components/Games/GameBox";

const savedGames = () => {
  return (
    <View style={styles.savedGames}>
      <GameBox />
    </View>
  );
};

const styles = StyleSheet.create({
  savedGames: {},
});

export default savedGames;
