/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import Button from '../Common/Button'
const LoginDark = () => {
  return (
    <SafeAreaView style={Style.root}>
      <View style={Style.logoContainer}>
        <Image
          style={Style.logo}
          source={require("../../assets/logo-white.png")}
        />
      </View>
      <View style={Style.textInput}>
        <TextInput style={Style.input} placeholder="Correo electrónico" />
        <TextInput style={Style.input} placeholder="Contraseña" />
        <Text style={Style.text}>¿Olvidaste tu contraseña? </Text>
      </View>
      <Button color="#FF3366" title="Login" />
    </SafeAreaView>
  );
};

let Style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0C1327",
    padding: 32,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 300,
    height: 73,
    marginTop: 40,
  },
  textInput: {
    flex: 3,
  },
  input: {
    height: 60,
    paddingLeft: 30,
    margin: 12,
    borderWidth: 2,
    borderColor: "#fff",
  },
  text: {
    marginLeft: 12,
  },
});
export default LoginDark;
