/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Button from "../Common/Button";

const Intro = () => {
  return (
    <SafeAreaView style={Style.root}>
      <ImageBackground
        style={Style.image}
        source={require("../../assets/building.png")}
      >
        <View style={Style.logoContainer}>
          <Image
            style={Style.logo}
            source={require("../../assets/logo-white.png")}
          />
        </View>
        <View style={Style.heroT}>
          <Text style={Style.heroText}>CROWDFUNDING</Text>
          <Text style={Style.heroText}>INMOBILIARIO</Text>
        </View>
        <View style={Style.buttons}>
        <Button color="#0C1327" title="Iniciar sesión" />
          <Button color="#227BFF" title="Crear cuenta" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

let Style = StyleSheet.create({
  root: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 300,
    height: 73,
    marginTop: 80,
  },
  image: {
    flex: 1,
    padding: 32,
    resizeMode: "cover",
    justifyContent: "center",
  },
  heroT: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  heroText: {
    fontSize: 25,
    fontWeight: "800",
  },
  buttonContainer: {
    margin: 5,
  },
  button: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    padding: 20,
    borderRadius: 40,
    backgroundColor: "#0C1327",
  },
  bgcB: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    padding: 20,
    borderRadius: 40,
    backgroundColor: "#227BFF",
  },
  buttons: {
    flex: 1,
  },
});
export default Intro;
