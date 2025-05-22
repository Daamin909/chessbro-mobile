import { StyleSheet, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Accuracy = ({ accuracy }) => {
  const { white, black } = accuracy;
  return (
    <View style={styles.accuracy}>
      <Text style={{ ...styles.text, ...{ fontWeight: 500 } }}>Accuracy</Text>
      <View style={styles.numbers}>
        <Text style={styles.text}>{white}</Text>
        <Text style={styles.text}>{black}</Text>
      </View>
    </View>
  );
};
export default Accuracy;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: RFValue(40),
    fontSize: RFValue(15),
    color: "#e3eef4",
  },
  accuracy: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: RFValue(1),
  },
  numbers: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
