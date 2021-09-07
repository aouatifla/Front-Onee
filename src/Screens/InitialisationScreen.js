import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Modal,
  BackHandler,
} from "react-native";
import AppButton from "../Components/Button/AppButton";
import CodePda from "./CodePda";

function InitialisationScreen(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 60,
          lineHeight: 100,
        }}
      >
        Initialisation
      </Text>
      <Text
        style={{
          fontSize: 30,
          lineHeight: 60,
        }}
      >
        Prérequis de l'application
      </Text>
      <TouchableHighlight onPress={() => setModalVisible(true)}>
        <>
          <Text style={styles.title}>CODE DU PDA </Text>
          <Text style={styles.sousTitle}>
            Taper pour charger le code du pda
          </Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight>
        <>
          <Text style={styles.title}>Données d'identification</Text>
          <Text style={styles.sousTitle}>
            Brancher le code du pda au poste local et charger les données
            d'identification
          </Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight>
        <>
          <Text style={styles.title}>Type de stockage </Text>
          <Text style={styles.sousTitle}>
            {" "}
            Taper pour choisir le type de stockage
          </Text>
        </>
      </TouchableHighlight>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-around",
        }}
      >
        <AppButton
          customButtonStyle={{
            borderColor: "#000",
            borderStyle: "solid",
            borderWidth: 1,
            width: "45%",
          }}
          title="Se vérifier"
        />
        <AppButton
          customButtonStyle={{
            borderColor: "#000",
            borderStyle: "solid",
            borderWidth: 1,
            width: "45%",
          }}
          onPress={() => BackHandler.exitApp()}
          title="Quitter"
        />
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        style={{
          backgroundColor: "#000",
        }}
        onRequestClose={() => setModalVisible(false)}
      >
        <CodePda
          // containerStyle={{ flex: 1, backgroundColor: "#000" }}
          containerStyle={{
            flex: 1,
            backgroundColor: "#000000b5",
            alignItem: "center",
            justifyContent: "center",
          }}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 40,
  },
  sousTitle: {
    fontSize: 20,
  },
});

export default InitialisationScreen;
