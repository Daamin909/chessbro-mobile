import { Image, View, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const MoveQuality = ({ name, image, numberW, numberB }) => {
  var newNumberB = numberB;
  var newNumberW = numberW;
  if (numberW < 10) {
    newNumberW = `0${numberW}`;
  }
  if (numberB < 10) {
    newNumberB = `0${numberB}`;
  }
  return (
    <View style={styles.moveQuality}>
      <Text>{name}</Text>
      <View style={styles.numbers}>
        <Text style={styles.text}>{newNumberW}</Text>
        <Image style={styles.images} source={image} />
        <Text style={styles.text}>{newNumberB}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    width: RFValue(17),
    height: RFValue(17),
  },
  text: {
    paddingHorizontal: RFValue(25),
  },
  moveQuality: {
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
export default MoveQuality;
