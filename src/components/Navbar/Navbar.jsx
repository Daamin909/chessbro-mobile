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
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  logo_heading: {
    color: "#F6D003",
    fontWeight: "bold",
    fontFamily: "Boldonse",
    fontSize: 32
  },
  navbar: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    height: 60,
    flexDirection: "row"
  },
});

export default Navbar;
