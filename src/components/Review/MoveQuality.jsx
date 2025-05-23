import { Image, View, Text, StyleSheet, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const MoveQuality = ({ name, image, numberW, numberB }) => {
  const colors = {
    best: "#81b64c",
    excellent: "#81b64c",
    good: "#95b776",
    blunder: "#fa412d",
    book: "#d5a47d",
    inaccuracy: "#f7c631",
    mistake: "#ffa459",
  };
  const styles = StyleSheet.create({
    images: {
      width: RFValue(17),
      height: RFValue(17),
    },
    text: {
      fontSize: RFValue(18),
      paddingHorizontal: "10%",
      color: "#e3eef4",
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
      alignItems: "center",
      flexDirection: "row",
    },
  });
  return (
    <View style={styles.moveQuality}>
      <Text style={{ ...styles.text, ...{ fontWeight: 500 } }}>{name}</Text>
      <View style={styles.numbers}>
        <Text
          style={{
            ...styles.text,
            ...{ color: colors[name.toLowerCase().trim()], fontWeight: 900 },
          }}
        >
          {numberW}
        </Text>
        <Image style={styles.images} source={image} />
        <Text
          style={{
            ...styles.text,
            ...{ color: colors[name.toLowerCase().trim()], fontWeight: 900 },
          }}
        >
          {numberB}
        </Text>
      </View>
    </View>
  );
};

export default MoveQuality;
