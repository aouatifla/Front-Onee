import { Platform } from "react-native";
import colors from "./colors";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default {
  colors,
  text: {
    color: colors.dark,
    width: "100%",
    fontSize: responsiveFontSize(2),
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
