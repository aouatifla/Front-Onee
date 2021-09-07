import React from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
import style from "../../config/style";
import AppButton from "../Components/Button/AppButton";

const AcceuilScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 60,
          lineHeight: 100,
        }}
      >
        Acceuil
      </Text>
      <TouchableHighlight>
        <>
          <Text> Charger une unité de relever</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight>
        <>
          <Text> Relevé un compteur</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight>
        <>
          <Text> Exporter sous format CSV</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight>
        <>
          <Text> Etat d'avancement des relevés</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight>
        <>
          <Text> Parametre d'initialisation</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight>
        <>
          <Text> Changer le mot de passe</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight>
        <>
          <Text> Se déconnecter</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight>
        <>
          <Text> Quitter l'application</Text>
        </>
      </TouchableHighlight>
    </View>
  );
};

export default AcceuilScreen;
