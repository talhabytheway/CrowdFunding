/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
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
        <View style={Style.container}>
          <View style={Style.whiteCon}>
            <View style={Style.textInput}>
              <Text style={Style.heading}>Iniciar sesión</Text>

              <Text style={Style.iText}>
                Email <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput style={Style.input} placeholder="Email" />
              <Text style={Style.iText}>
                Contraseña <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput style={Style.input} placeholder="Contraseña" />
              <Text style={Style.text}>¿Olvidaste tu contraseña? </Text>
            </View>
            <View style={Style.buttons}>
              <Button color="#227BFF" title="Iniciar Sesión" />
            </View>
          </View>
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
    flex: 0.9,
    padding: 5,
  },
  logo: {
    width: 235,
    height: 57,
    marginTop: 70,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 3,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 10,
    textAlign: 'center',
  },
  whiteCon: {
    flex: 1,
    height: "100%",
    padding: 32,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#fff",
  },
  textInput: {
    flex: 3,
  },
  iText: {
    marginLeft: 20,
    marginTop: 10,
  },
  text: {
    textAlign: "right",
  },
  input: {
    height: 50,
    paddingLeft: 30,
    margin: 12,
    marginTop: 0,
    borderWidth: 2,
    borderColor: "#A4A9B2",
    borderRadius: 10,
  },
});
export default Intro;
