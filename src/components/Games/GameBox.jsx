import { StyleSheet, View, Text } from "react-native";

const GameBox = () => {
  return <View style={styles.gamebox}>
    <Text>GameBox</Text>
  </View>;
};
export default GameBox;

const styles = StyleSheet.create({
  gamebox: {
    flex: 1,
    height: 2000,
  },
});
