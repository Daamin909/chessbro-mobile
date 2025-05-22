import { StyleSheet, View, Text, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const defaultPfp = require("../../../assets/images/no-profile-pic.jpg");
const PlayerIcon = ({ playerInfo }) => {
  const { white_player, black_player, white_rating, black_rating } = playerInfo;
  // TODO add profile icons
  return (
    <View style={styles.playerIcon}>
      <Text style={{ ...styles.text, ...{ fontWeight: 500 } }}>Players</Text>
      <View style={styles.numbers}>
        <View style={styles.individualPlayer}>
          <Text style={styles.text}>{white_player}</Text>
          <Image source={defaultPfp} style={styles.image}></Image>
          <Text style={styles.text}>{white_rating}</Text>
        </View>
        <View style={styles.individualPlayer}>
          <Text style={styles.text}>{black_player}</Text>
          <Image source={defaultPfp} style={styles.image}></Image>
          <Text style={styles.text}>{black_rating}</Text>
        </View>
      </View>
    </View>
  );
};
export default PlayerIcon;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: RFValue(40),
    fontSize: RFValue(15),
    color: "#e3eef4",
    marginVertical: RFValue(10)
  },
  playerIcon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: RFValue(1),
  },
  individualPlayer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  numbers: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    height: RFValue(40),
    width: RFValue(40),
    borderRadius: 5,
  },
});
