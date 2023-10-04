import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { AsyncStorage } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "./componentes/Header.js";
import Body from "./componentes/Body.js";

export default function App() {
  const [estado, setarEstado] = useState("leitura");
  const [anotacao, setarAnotacao] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const anotacaoLeitura = await AsyncStorage.getItem("anotacao");
        setarAnotacao(anotacaoLeitura);
      } catch (error) {
        //
      }
    })();
  }, []);

  setData = async () => {
    try {
      await AsyncStorage.setItem("anotacao", anotacao);
    } catch (error) {
      //
    }
    alert("sua anotação foi salva com sucesso!");
  };

  function atualizarTexto() {
    setarEstado("leitura");
    setData();
  }
  if (estado == "leitura") {
    return (
      // <ScrollView style={{ paddingTop: Constants.statusBarHeight,flex: 1 }}>
      <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
        <View style={styles.header}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            Aplicativo Anotação
          </Text>
        </View>
        {anotacao != "" ? (
          <View style={{ padding: 20 }}>
            <Text style={styles.anotacao}>{anotacao}</Text>
          </View>
        ) : (
          <View style={{ padding: 20 }}>
            <Text style={styles.anotacao}>Nenhuma anotação encontrada :(</Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => setarEstado("atualizando")}
          style={styles.btnAnotacao}
        >
          {anotacao == "" ? (
            <Text style={styles.btnAnotacaoTeto}>+</Text>
          ) : (
            <Text style={styles.btnAnotacaoEditar}>Editar</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  } else if (estado == "atualizando") {
    return (
      <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
        <View style={styles.header}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            Aplicativo Anotação
          </Text>
        </View>
        <TextInput
          autoFocus={true}
          onChangeText={(text) => setarAnotacao(text)}
          multiline={true}
          numberOfLines={5}
          value={anotacao}
          style={{ textAlignVertical: "top", height: 300, padding: 20 }}
        ></TextInput>

        <TouchableOpacity
          onPress={() => atualizarTexto()}
          style={styles.btnSalvar}
        >
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 10,
    backgroundColor: "#069",
  },
  anotacao: {
    fontSize: 13,
  },
  btnAnotacao: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    backgroundColor: "#069",
    borderRadius: 25,
  },
  btnSalvar: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 100,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#069",
    borderRadius: 25,
  },
  btnAnotacaoTeto: {
    color: "white",
    position: "relative",
    textAlign: "center",
    top: 3,
    fontSize: 30,
  },
  btnAnotacaoEditar: {
    color: "white",
    position: "relative",
    textAlign: "center",
    top: 16,
    fontSize: 12,
  },
});
