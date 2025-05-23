import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Button, Menu, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import validatePGN, { invalidPGN } from "../../scripts/fetch/validatePGN";
import reviewGame from "../../scripts/fetch/reviewGame";

const Input = ({ setPGN, setUnderReview, setMoveNumber, openSheet }) => {
  const [option, setOption] = useState("pgn");
  const [input, setInput] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const onPress = async (e) => {
    if (input.trim().length === 0) {
      Toast.show({
        type: "error",
        text1: `Invalid ${option === "chess.com" ? "username" : "PGN"}`,
        text2: `Enter a valid ${option === "chess.com" ? "username" : "PGN"}`,
      });
      return;
    }
    if (option === "pgn") {
      const isValidPGN = await validatePGN(input);
      if (!isValidPGN) {
        invalidPGN();
        return;
      }
      const reply = await reviewGame(input);
      setPGN(reply);
      setMoveNumber(0);
      openSheet();
      setUnderReview(true);
    }
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.optionsContainer}>
        <TextInput
          label={option === "chess.com" ? "Username" : "PGN"}
          placeholder={option === "chess.com" ? "Enter username" : "Enter PGN"}
          value={input}
          mode="outlined"
          onChangeText={(text) => setInput(text)}
          multiline={option === "pgn"}
          numberOfLines={1}
          placeholderTextColor="#bec8cd"
          maxLength={option === "chess.com" ? 25 : 10000000000}
          style={{ width: "50%" }}
          activeOutlineColor="#bec8cd"
          outlineColor="#bec8cd"
          textColor="#e3eef4"
          autoCorrect={false}
        />
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button
              icon={option === "chess.com" ? "chess-pawn" : "text-box-multiple"}
              mode="outlined"
              onPress={() => setMenuVisible(true)}
              textColor="#e3eef4"
            >
              {option === "pgn" ? "PGN" : option}
            </Button>
          }
          theme={{ colors: { onSurfaceVariant: "#000" } }}
        >
          <Menu.Item
            onPress={() => {
              setOption("chess.com");
              setMenuVisible(false);
            }}
            title="chess.com"
            leadingIcon={"chess-pawn"}
            theme={{ colors: { onSurfaceVariant: "#000" } }}
          />
          <Menu.Item
            onPress={() => {
              setOption("pgn");
              setMenuVisible(false);
            }}
            title="PGN"
            leadingIcon={"text-box-multiple"}
            theme={{ colors: { onSurfaceVariant: "#000" } }}
          />
        </Menu>
      </View>
      <Button icon="magnify" mode="elevated" onPress={onPress}>
        Review game
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "8%",
    width: "100%",
  },
  optionsContainer: {
    color: "#E3EEF4",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "1%",
    marginTop: "2%",
    marginBottom: "4%",
    justifyContent: "space-around",
    width: "100%",
  },
  text: {
    color: "#E3EEF4",
    width: "50%",
    borderWidth: 1,
    borderColor: "#bec8cd",
    borderRadius: 10,
    padding: 10,
  },
  dropdownHolder: {
    backgroundColor: "#072434",
    margin: 0,
    padding: 0,
    color: "#E3EEF4",
    width: "45%",
  },
  submitButton: {
    color: "#072434",
    padding: 5,
    fontSize: RFValue(16),
    backgroundColor: "#E3EEF4",
    textAlign: "center",
    borderRadius: 10,
  },
  mainView: {
    borderRadius: 10,
    padding: "1%",
    width: "50%",
  },
});
export default Input;
