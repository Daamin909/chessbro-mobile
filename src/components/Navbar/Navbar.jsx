import { Image, StyleSheet, Text, View } from "react-native";
const logo = require("../../../assets/branding/logo.png");

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.logo_heading}>ChessBro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 36,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  logo_heading: {
    color: "#E3EEF4",
    fontWeight: "bold",
    fontSize: 45,
  },
  navbar: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    height: 60,
    backgroundColor: "#072434",
    flexDirection: "row",
  },
});

export default Navbar;
