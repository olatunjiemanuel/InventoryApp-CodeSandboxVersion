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
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={(prev) => setModalView(!prev)}
            >
              <Text style={styles.modalText}>X</Text>
            </TouchableOpacity>
            <ScrollView style={styles.customTextInputCntnr}>
              <View>
                <CustomTextInput
                  formTitle="Item name"
                  placeHolder="Enter item name"
                />
              </View>
              <View>
                <CustomTextInput
                  formTitle="Item id"
                  placeHolder="Enter item id"
                />
              </View>
              <View>
                <CustomTextInput
                  formTitle="Item summary"
                  placeHolder="Describe this item"
                />
              </View>
              <View>
                <CustomTextInput
                  formTitle="Amount in stock"
                  placeHolder="How many of these items are in stock ?"
                />
              </View>
              <View>
                <CustomTextInput
                  formTitle="Item price"
                  placeHolder="Enter a price for this item"
                />
              </View>
              <View>
                <CustomButton buttonText="Add image" />
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
  modalCntnr: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  addItemModal: {
    flex: 1,
    backgroundColor: "white",
    margin: 30,
    borderRadius: 10
  },
  modalCloseButton: {
    marginTop: 10,
    width: 20,
    marginLeft: 287,
    alignItems: "center"
  },
  modalText: {
    fontSize: 20
  },
  customTextInputCntnr: {
    marginTop: 10,
    backgroundColor: "red"
  }
});

export default App;
