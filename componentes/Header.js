import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={{ backgroundColor: "#069", padding: "2%", width: "100%" }}>
      <Text style={{ textAlign: "center", fontSize: 25, color: "white" }}>
        App Music
      </Text>
    </View>
  );
};

export default Header;
