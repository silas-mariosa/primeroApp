import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>App Music</Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: "#069",
    padding: "2%",
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
  },
});

export default Header;
