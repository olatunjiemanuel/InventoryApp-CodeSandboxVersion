import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

const CustomTextInput = (props) => {
  const { formTitle } = props;
  return (
    <View style={styles.textInputCntnr}>
      <Text>{formTitle}</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputCntnr: {
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 25,
    borderRadius: 10
  },
  textInput: {
    borderBottomWidth: 1,
    width: 250
  }
});

export default CustomTextInput;
