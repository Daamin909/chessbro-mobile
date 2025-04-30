import backend from "../../utils/backendClient";

const reviewGame = async (pgn) => {
  try {
    const response = await backend.post("/review-game", { pgn });
    const analysedGame = response.data;
    return analysedGame;
  } catch {
    Toast.show({
      type: "error",
      text1: `Couldn't connect to server`,
    });
    return null;
  }
};

export default reviewGame;
