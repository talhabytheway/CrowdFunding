/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ title, color }) => {

  return (
      <TouchableOpacity style={Style.buttonContainer}>
        <Text style={Style(color).button }>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const Style = (color) =>StyleSheet.create({
  buttonContainer: {
    margin: 5,
  },
  button: {
    color: '#fff',
    textAlign: "center",
    fontSize: 20,
    padding: 15,
    borderRadius: 40,
    margin: 6,
    backgroundColor: color,
  },
});
