import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, ScrollView, Platform } from "react-native";
import Header from "./componentes/Header.js";
import Body from "./componentes/Body.js";

export default function App()  {

    return (      
      // <ScrollView style={{ paddingTop: Constants.statusBarHeight,flex: 1 }}>
      <View style={{marginTop: 30}}>
        <Body></Body>
      </View>
    );
}
