import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import roundToHundredth from "../../common/funcs/roundToHundredth";
import { RFValue } from "react-native-responsive-fontsize";

const sigmoidAlgorithm = (cp) => {
  let newCP = Math.max(-1000, Math.min(1000, cp));
  let scale = newCP / 153;
  let sigmoid = 1 / (1 + Math.exp(-scale));
  let percent = sigmoid * 100;
  let top = 100 - percent;
  let bottom = percent;
  return [top, bottom];
};

const EvalBar = ({ evaluation }) => {
  const { type, value } = evaluation;
  const [topHeight, setTopHeight] = useState("50%");
  const [bottomHeight, setBottomHeight] = useState("50%");
  const SCREEN_WIDTH = useScreen().width;
  useEffect(() => {
    if (type == "mate") {
      if (value > 0) {
        setTopHeight(0);
        setBottomHeight("100%");
      } else {
        setTopHeight("100%");
        setBottomHeight(0);
      }
    } else if (type == "cp") {
      const heights = sigmoidAlgorithm(value);
      if (value > 0) {
        setTopHeight(`${heights[0]}%`);
        setBottomHeight(`${heights[1]}%`);
      } else {
        setTopHeight(`${heights[0]}%`);
        setBottomHeight(`${heights[1]}%`);
      }
    }
  }, [evaluation]);
  const styles = StyleSheet.create({
    evalbar: {
      flex: 1,
      height: Math.floor(SCREEN_WIDTH / 40) * 39,
    },
    top: {
      height: topHeight,
      backgroundColor: "black",
      borderTopLeftRadius: 5,
    },
    bottom: {
      height: bottomHeight,
      backgroundColor: "white",
      borderBottomLeftRadius: 5,
      justifyContent: "flex-end",
    },
    evalValue: {
      fontSize: RFValue(8),
      textAlign: "center",
    },
  });
  return (
    <View style={styles.evalbar}>
      <View style={styles.top}>
        <Text style={{ color: "white", ...styles.evalValue }}>
          {value <= 0 && roundToHundredth(Math.abs(value / 100))}
        </Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.evalValue}>
          {value >= 0 && roundToHundredth(value / 100)}
        </Text>
      </View>
    </View>
  );
};
export default EvalBar;
