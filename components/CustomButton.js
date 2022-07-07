import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButtom = (props) => {
  const { buttonText } = props;
  return (
    <TouchableOpacity style={Styles.buttonContainer}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "blue"
  }
});

export default CustomButtom;
