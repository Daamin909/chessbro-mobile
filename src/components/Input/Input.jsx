import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../common/Button/Button";
import { RFValue } from "react-native-responsive-fontsize";

const Input = () => {
  const [option, setOption] = useState("chess.com");
  const [input, setInput] = useState("");
  const onPress = (e) => {
    console.log(option, input);
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.optionsContainer}>
        <TextInput
          placeholder={option === "pgn" ? "Enter PGN" : "Enter Username"}
          style={styles.text}
          multiline={option === "pgn"}
          value={input}
          numberOfLines={2}
          onChangeText={setInput}
          placeholderTextColor="#bec8cd"
          maxLength={25}
        />
        <View style={styles.dropdownHolder}>
          <Picker
            selectedValue={option}
            onValueChange={(value) => setOption(value)}
            dropdownIconColor={"#e3eef4"}
            selectionColor="black"
            mode="dropdown"
          >
            <Picker.Item
              label="chess.com"
              value="chess.com"
              style={styles.dropdownHolder}
            />
            <Picker.Item
              label="PGN"
              value="pgn"
              style={styles.dropdownHolder}
            />
          </Picker>
        </View>
      </View>
      <Button
        onPress={onPress}
        styles={styles.submitButton}
        title="Review Game!"
        containerStyles={styles.mainView}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "3%",
  },
  optionsContainer: {
    backgroundColor: "#072434",
    color: "#E3EEF4",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "1%",
    borderRadius: 10,
    marginVertical: "2%",
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
