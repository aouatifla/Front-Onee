import { StatusBar } from "expo-status-bar";
import React from "react";
import LoginScreen from "./src/Screens/LoginScreen";
import AcceuilScreen from "./src/Screens/AcceuilScreen";
import InitialisationScreen from "./src/Screens/InitialisationScreen";
import SaisieIndex from "./src/Screens/SaisieIndex";
const App = () => {
  return <AcceuilScreen />;
  //return <InitialisationScreen />;
  //return <LoginScreen />;
  //return <SaisieIndex />;
};

export default App;
