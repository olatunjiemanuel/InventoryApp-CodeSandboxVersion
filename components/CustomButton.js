import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButtom = (props) => {
  const { buttonText, onPress } = props;
  return (
    <TouchableOpacity style={Styles.buttonContainer} onPress={onPress}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "blue",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    height: 40,
    width: 150,
    justifyContent: "center"
  }
});

export default CustomButtom;
