import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Accuracy = ({ accuracy }) => {
  const { white, black } = accuracy;
  return (
    <View style={styles.accuracy}>
      <Text style={[styles.text, styles.white]}>{white}</Text>
      <Text style={[styles.text, { fontWeight: 900 }]}>Accuracy</Text>
      <Text style={[styles.text, styles.black]}>{black}</Text>
    </View>
  );
};
export default Accuracy;

const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(18),
    color: "#e3eef4",
    fontWeight: 500,
  },
  white: {
    backgroundColor: "white",
    color: "black",
    minWidth: RFValue(50),
    textAlign: "center",
    borderRadius: 25,
  },
  black: {
    backgroundColor: "black",
    color: "white",
    minWidth: RFValue(50),
    textAlign: "center",
    borderRadius: 25,
  },
  accuracy: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: RFValue(10),
    width: "80%",
    padding: RFValue(15),
    backgroundColor: "#072434",
    borderRadius: 25,
  },
});
