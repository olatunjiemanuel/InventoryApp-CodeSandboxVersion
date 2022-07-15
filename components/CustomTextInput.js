import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

const CustomTextInput = (props) => {
  const { formTitle, placeHolder, onChangeText } = props;
  return (
    <View style={styles.textInputCntnr}>
      <Text style={styles.headerText}>{formTitle}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeHolder}
        onChangeText={onChangeText}
      />
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
    width: 250,
    padding: 5,
    placeholderTextColor: "grey"
  },
  headerText: {
    padding: 5
  }
});

export default CustomTextInput;
