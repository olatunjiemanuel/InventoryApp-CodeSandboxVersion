import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView
} from "react-native";

import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import CustomHeader from "../components/CustomHeader";

function App() {
  const [modalView, setModalView] = useState(false);
  const [InventoryArray, setInventoryArray] = useState([]);
  const [InventoryObject, setInventoryObject] = useState({
    ItemName: "",
    ItemID: null,
    ItemSummary: "",
    NumberOfItemInStock: null,
    ItemPrice: null,
    ItemImageUrl: ""
  });
  const [Camera, setCamera] = useState(false);

  const noInventoryView = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={{ paddingBottom: 100 }}>
          <Text>You do not have any items in your Inventory</Text>
        </View>
        <TouchableOpacity
          style={styles.addButtonTextCntnr}
          onPress={() => setModalView(true)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const InventoryView = () => {
    return (
      <View>
        <Text>Inventory</Text>
      </View>
    );
  };
  return (
    <View style={styles.app}>
      <View>
        <View style={styles.headerCntnr}>
          <Text style={styles.headerText}>E-inventory</Text>
        </View>
        {noInventoryView()}
      </View>
      <Modal visible={modalView} animationType="slide" transparent={true}>
        <View style={styles.modalCntnr}>
          <View style={styles.addItemModal}>
            <View style={styles.addItemHeader}>
              <CustomHeader onPress={(prev) => setModalView(!prev)} />
            </View>
            <ScrollView style={styles.customTextInputCntnr}>
              <View>
                <CustomTextInput
                  formTitle="Item name"
                  placeHolder="Enter item name"
                />
              </View>
              <View style={{ paddingTop: 20 }}>
                <CustomTextInput
                  formTitle="Item id"
                  placeHolder="Enter item id"
                />
              </View>
              <View style={{ paddingTop: 20 }}>
                <CustomTextInput
                  formTitle="Item summary"
                  placeHolder="Describe this item"
                />
              </View>
              <View style={{ paddingTop: 20 }}>
                <CustomTextInput
                  formTitle="Amount in stock"
                  placeHolder="How many of these items are in stock ?"
                />
              </View>
              <View style={{ paddingTop: 20 }}>
                <CustomTextInput
                  formTitle="Item price"
                  placeHolder="Enter a price for this item"
                />
              </View>
              <View style={{ paddingTop: 40 }}>
                <CustomButton
                  buttonText="add image"
                  onPress={() => {
                    setCamera(true);
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    maxWidth: 500,
    flex: 1,
    backgroundColor: "white"
  },
  headerCntnr: {
    borderWidth: 1,
    borderColor: "blue",
    width: 120,
    padding: 7,
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    alignSelf: "center"
  },
  headerText: {
    fontSize: 20,
    alignText: "center",
    color: "#fff"
  },
  mainContainer: {
    marginTop: 200,
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  addButtonTextCntnr: {
    borderWidth: 2.5,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center"
  },
  addButtonText: {
    fontSize: 30,
    textAlign: "center"
  },
  addItemHeader: {
    paddingBottom: 20
  },
  modalCntnr: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  addItemModal: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 30,
    borderRadius: 10
  },
  customTextInputCntnr: {
    marginTop: 10
  }
});

export default App;
