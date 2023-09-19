import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Body = () => {
  return (
    <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap'}}>
      <Image
      style={{width:90, height:90}}
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
      />
      <Text style={{width:'50%'}}>Olá do arquivo Body.</Text>
    </View>
  );
};

export default Body;
