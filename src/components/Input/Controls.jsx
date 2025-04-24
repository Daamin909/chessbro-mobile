import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faFloppyDisk,
  faForward,
  faForwardFast,
  faBackward,
  faBackwardFast,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons/";
import { RFValue } from "react-native-responsive-fontsize";
import Button from "../../common/Button/Button";

const Controls = () => {
  const onPress = (index) => {
    console.log(index);
  };
  return (
    <View style={styles.controls}>
      <View style={styles.groups}>
        <Button onPress={() => onPress(0)}>
          <FontAwesomeIcon icon={faFloppyDisk} size={RFValue(25)} />
        </Button>
      </View>
      <View style={styles.groups}>
        <Button onPress={() => onPress(1)} styles={styles.icons}>
          <FontAwesomeIcon
            icon={faBackwardFast}
            size={RFValue(25)}
            style={styles.icons}
          />
        </Button>
        <Button onPress={() => onPress(2)} styles={styles.icons}>
          <FontAwesomeIcon
            icon={faBackward}
            size={RFValue(25)}
            style={styles.icons}
          />
        </Button>
        <Button onPress={() => onPress(3)} styles={styles.icons}>
          <FontAwesomeIcon
            icon={faForward}
            size={RFValue(25)}
            style={styles.icons}
          />
        </Button>
        <Button onPress={() => onPress(4)} styles={styles.icons}>
          <FontAwesomeIcon icon={faForwardFast} size={RFValue(25)} />
        </Button>
      </View>
      <View style={styles.groups}>
        <Button onPress={() => onPress(5)}>
          <FontAwesomeIcon icon={faRetweet} size={RFValue(25)} />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    backgroundColor: "#072434",
    display: "flex",
    flexDirection: "row",
    width: "87.5%",
    padding: "3%",
    marginVertical: "5%",
    justifyContent: "space-between",
    borderRadius: 20,
  },
  groups: {
    backgroundColor: "#e3eef4",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: "2%",
    borderRadius: 20,
  },
  firstGrp: {},
  secondGrp: {},
  thirdGrp: {},
  icons: {
    marginHorizontal: "2%",
  },
});

export default Controls;
