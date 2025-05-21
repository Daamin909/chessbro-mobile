import { StyleSheet, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const PlayerInfo = ({ name, rating, isWhite }) => {
  // TODO: user pfp shall be added when I modify the backend, not a priority rn
  var borderRadi;
  if (isWhite) {
    borderRadi = {
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    };
  } else {
    borderRadi = {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    };
  }
  return (
    <View
      style={{
        ...styles.playerInfo,
        ...borderRadi,
      }}
    >
      {/* <Image source={{ uri: pfp }} /> */}
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{rating != 0 && rating}</Text>
    </View>
  );
};
export default PlayerInfo;

const styles = StyleSheet.create({
  playerInfo: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    padding: RFValue(3),
    flexDirection: "row",
    borderWidth: RFValue(1),
    backgroundColor: "black",
  },
  text: {
    color: "#e3eef4",
    fontSize: RFValue(14),
  },
});
