import { StyleSheet, View, Text, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const bestImage = require("../../../assets/images/quality_imgs/best_move.png");
const goodImage = require("../../../assets/images/quality_imgs/good.png");
const excellentImage = require("../../../assets/images/quality_imgs/excellent.png");
const mistakeImage = require("../../../assets/images/quality_imgs/mistake.png");
const inaccuracyImage = require("../../../assets/images/quality_imgs/inaccuracy.png");
const blunderImage = require("../../../assets/images/quality_imgs/blunder.png");
const bookImage = require("../../../assets/images/quality_imgs/book.png");
const QualityStats = ({ moveType, move }) => {
  var moveTypeText;
  var moveTypeImage;
  switch (moveType) {
    case "best_move":
      moveTypeText = "the Best move";
      moveTypeImage = bestImage;
      break;
    case "book_move":
      moveTypeText = "a Book move";
      moveTypeImage = bookImage;
      break;
    case "inaccuracy":
      moveTypeText = "an Inaccuracy";
      moveTypeImage = inaccuracyImage;
      break;
    case "mistake":
      moveTypeText = "a Mistake";
      moveTypeImage = mistakeImage;
      break;
    case "excellent":
      moveTypeText = "an Excellent move";
      moveTypeImage = excellentImage;
      break;
    case "good":
      moveTypeText = "a Good move";
      moveTypeImage = goodImage;
      break;
    case "blunder":
      moveTypeText = "a Blunder";
      moveTypeImage = blunderImage;
      break;
  }
  return (
    <View style={styles.qualityStats}>
      {moveType && (
        <Image source={moveTypeImage} style={styles.moveQualityImg} />
      )}
      <Text style={styles.moveQualityText}>
        {moveType ? `${move} is ${moveTypeText}` : "Start Reviewing!"}
      </Text>
    </View>
  );
};
export default QualityStats;

const styles = StyleSheet.create({
  qualityStats: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: RFValue(20),
  },
  moveQualityImg: {
    height: RFValue(30),
    width: RFValue(30),
    marginHorizontal: 5,
  },
  moveQualityText: {
    fontSize: RFValue(18),
    color: "#e3eef4",
    marginHorizontal: 5,
  },
});
