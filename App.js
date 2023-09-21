import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, ScrollView, Platform } from "react-native";
import Header from "./componentes/Header.js";
import Body from "./componentes/Body.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.pltaforma = Platform.OS;
  }

  mostrarConteudo() {
    return (
      <>
        <Header></Header>
        <Body></Body>
      </>
    );
  }

  render() {
    return (      
      <ScrollView style={{ paddingTop: Constants.statusBarHeight,flex: 1 }}>
        {this.mostrarConteudo()}
      </ScrollView>
    );
  }
}
