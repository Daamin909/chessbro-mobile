import { StyleSheet, View } from "react-native";
import MoveQuality from "./MoveQuality.jsx";
import { RFValue } from "react-native-responsive-fontsize";
const bestImage = require("../../../assets/images/quality_imgs/best_move.png");
const goodImage = require("../../../assets/images/quality_imgs/good.png");
const excellentImage = require("../../../assets/images/quality_imgs/excellent.png");
const mistakeImage = require("../../../assets/images/quality_imgs/mistake.png");
const inaccuracyImage = require("../../../assets/images/quality_imgs/inaccuracy.png");
const blunderImage = require("../../../assets/images/quality_imgs/blunder.png");
const bookImage = require("../../../assets/images/quality_imgs/book.png");

const ReportCard = ({ move_numbers }) => {
  return (
    <View style={styles.container}>
      <MoveQuality
        numberW={move_numbers.w.book_move}
        numberB={move_numbers.b.book_move}
        name="Book"
        image={bookImage}
      />
      <MoveQuality
        numberW={move_numbers.b.best_move}
        numberB={move_numbers.b.best_move}
        name="Best"
        image={bestImage}
      />
      <MoveQuality
        numberW={move_numbers.w.excellent}
        numberB={move_numbers.b.excellent}
        name="Excellent"
        image={excellentImage}
      />
      <MoveQuality
        numberB={move_numbers.b.good}
        numberW={move_numbers.w.good}
        name="Good"
        image={goodImage}
      />
      <MoveQuality
        numberW={move_numbers.w.inaccuracy}
        numberB={move_numbers.b.inaccuracy}
        name="Inaccuracy"
        image={inaccuracyImage}
      />
      <MoveQuality
        name="Mistake"
        numberW={move_numbers.w.mistake}
        numberB={move_numbers.b.mistake}
        image={mistakeImage}
      />
      <MoveQuality
        numberW={move_numbers.w.blunder}
        numberB={move_numbers.b.blunder}
        name="Blunder"
        image={blunderImage}
      />
    </View>
  );
};
const styles = StyleSheet.create({
});
export default ReportCard;
