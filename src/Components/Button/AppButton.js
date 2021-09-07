import React from "react";
import { StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
import colors from "../../../config/colors";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const AppButton = ({
  title,
  onPress,
  color: backgroundColor,
  fontColor = "#000",
  customButtonStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor },
        { ...customButtonStyle },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: fontColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 5,
    marginLeft: Platform.OS === "android" ? 0 : 0,
  },
  text: {
    //color: colors.white,
    fontSize: responsiveFontSize(1.8),
    // textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000",
  },
});

export default AppButton;
