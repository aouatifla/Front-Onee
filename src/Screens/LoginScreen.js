import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../Components/Screen";

import AppForm from "../Components/AppForm/AppForm";
import AppFormField from "../Components/AppFormField/AppFormField";
import SubmitButton from "../Components/SubmitButton/SubmitButton";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";

import {
  responsiveHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import colors from "../../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  // const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    console.log("submited");
  };

  return (
    <Screen style={{ paddingRight: "5%", paddingLeft: "5%" }}>
      <Image
        style={styles.logo}
        source={require("../../assets/one.png")}
        resizeMode="contain"
        visible={loginFailed}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          secureTextEntry
          placeholder="Password"
          textContentType="password"
        />
        <SubmitButton title="Login" color={colors.bleu} />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: responsiveScreenWidth(50),
    height: responsiveHeight(20),
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
