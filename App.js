import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, ScrollView, Platform, TouchableOpacity } from "react-native";
import Header from "./componentes/Header.js";
import Body from "./componentes/Body.js";

export default function App()  {

  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('Minha anotação');

  if(estado == 'leitura'){
  return (      
    // <ScrollView style={{ paddingTop: Constants.statusBarHeight,flex: 1 }}>
    <View style={{paddingTop: Constants.statusBarHeight, flex: 1}}>
      <View style={styles.header}>
        <Text style={{textAlign:'center', color:'white'}}>Aplicativo Anotação</Text>
      </View>

      <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>
    <TouchableOpacity><Text>+</Text></TouchableOpacity>
    </View>
  );
  }else if(estado == 'atualizando'){

  }
}

const styles = StyleSheet.create({
  header:{
    width: '100%',
    padding: 10,
    backgroundColor: '#069'
  },
  anotacao:{
    fontSize: 14,

  }
})