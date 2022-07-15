import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomHeader = (props) => {
  const { onPress } = props;
  return (
    <View style={Styles.HeaderCntnr}>
      <View style={Styles.Header}>
        <Text style={Styles.headerText}>Add Item</Text>
      </View>
      <TouchableOpacity style={Styles.modalCloseButton} onPress={onPress}>
        <Text style={Styles.modalText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  HeaderCntnr: {
    flexDirection: "row",
    alignItems: "center"
  },
  Header: {
    paddingLeft: 124,
    paddingTop: 20
  },
  modalCloseButton: {
    marginTop: 10,
    width: 20,
    marginLeft: 100,
    alignItems: "center"
  },
  modalText: {
    fontSize: 20
  }
});

export default CustomHeader;
