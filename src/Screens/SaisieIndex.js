import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Modal,
  TextInput,
  BackHandler,
} from "react-native";
import AppButton from "../Components/Button/AppButton";

function SaisieIndex(props) {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 60,
          lineHeight: 100,
        }}
      >
        Saisie d'Index
      </Text>
      <Text> Index :</Text>
      <TextInput keyboardType="numeric" placeholder="Taper Index" />
      <AppButton title="Valider" />
    </View>
  );
}

export default SaisieIndex;
