import Toast from "react-native-toast-message";
import backend from "../../utils/backendClient";

const validatePGN = async (pgn) => {
  try {
    const response = await backend.post("/validate-pgn", { pgn });
    const valid = response.data;
    return valid;
  } catch {
    Toast.show({
      type: "error",
      text1: `Couldn't connect to server`,
    });
    return null;
  }
};

export const invalidPGN = () => {
  Toast.show({
    type: "error",
    text1: `Invalid PGN`,
    text2: `Enter a valid PGN`,
  });
};

export default validatePGN;
