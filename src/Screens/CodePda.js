import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from "react-native";
import AppForm from "../Components/AppForm/AppForm";
import AppButton from "../Components/Button/AppButton";
import AppFormField from "../Components/AppFormField/AppFormField";

function CodePda({ containerStyle, closeModal }) {
  return (
    <View style={containerStyle}>
      <View style={{ margin: 25, backgroundColor: "#fff", padding: 15 }}>
        <AppForm>
          <Text
            style={{
              fontSize: 20,
              borderBottomColor: "#ccc",
              borderBottomWidth: 2,
            }}
          >
            Veuillez entrer le code du PDA :{" "}
          </Text>
          <TextInput keyboardType="numeric" placeholder="Entrer votre code" />
          <View style={{ flexDirection: "row" }}>
            <AppButton
              onPress={closeModal}
              customButtonStyle={styles.buttonStyle}
              title="Retour"
            />

            <AppButton
              customButtonStyle={styles.buttonStyle}
              title="Enregistrer"
            />
          </View>
        </AppForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 3,
    width: "30%",
    margin: 25,
  },
});
export default CodePda;
