import { StyleSheet, View, Text, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const defaultPfp = require("../../../assets/images/no-profile-pic.jpg");
const PlayerIcon = ({ playerInfo }) => {
  const { white_player, black_player, white_rating, black_rating } = playerInfo;
  // TODO add profile icons
  return (
    <View style={styles.playerIcon}>
      <View style={styles.individualPlayer}>
        <Text style={styles.text}>{white_player}</Text>
        <Image
          source={defaultPfp}
          style={{ ...styles.image, ...{ borderColor: "white" } }}
        ></Image>
        <Text style={styles.text}>{white_rating}</Text>
      </View>
      <Text
        style={{
          ...styles.text,
          ...{ fontWeight: 500, paddingHorizontal: 0 },
        }}
      >
        VS
      </Text>
      <View style={styles.individualPlayer}>
        <Text style={styles.text}>{black_player}</Text>
        <Image
          source={defaultPfp}
          style={{ ...styles.image, ...{ borderColor: "black" } }}
        ></Image>
        <Text style={styles.text}>{black_rating}</Text>
      </View>
    </View>
  );
};
export default PlayerIcon;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: RFValue(50),
    fontSize: RFValue(18),
    color: "#e3eef4",
    marginVertical: RFValue(10),
    fontWeight: 900,
  },
  playerIcon: {
    display: "flex",
    justifyContent: "space-around",
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
    height: RFValue(60),
    width: RFValue(60),
    borderRadius: 5,
    borderWidth: RFValue(2),
  },

});
