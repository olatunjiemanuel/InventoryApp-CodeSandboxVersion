import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomHeader = (props) => {
  const { onPress } = props;
  return (
    <View style={Styles.HeaderCntnr}>
      <View style={Styles.addItemHeader}>
        <Text>Add Item</Text>
      </View>
      <TouchableOpacity style={Styles.modalCloseButton} onPress={onPress}>
        <Text style={Styles.modalText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  HeaderCntnr: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center"
  },
  modalCloseButton: {
    marginTop: 10,
    width: 20,
    marginLeft: 225,
    alignItems: "center"
  },
  modalText: {
    fontSize: 20
  }
});

export default CustomHeader;
