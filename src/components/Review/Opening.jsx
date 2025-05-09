import { StyleSheet, View, Text, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Opening = ({ openingName }) => {
  return (
    <View style={styles.opening}>
      <Text style={styles.openingText}>{openingName}</Text>
    </View>
  );
};
export default Opening;

const styles = StyleSheet.create({
  opening: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: RFValue(20),
  },
  openingText: {
    fontSize: RFValue(18),
    color: "#e3eef4",
    marginHorizontal: 5,
  },
});
