import { Pressable, Text, View } from "react-native";

const Button = ({ onPress, styles, title, children, containerStyles }) => {
  return (
    <View style={containerStyles}>
      <Pressable onPress={onPress}>
        <Text style={styles}>
          {title ? title : ""}
          {children ? children : ""}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
