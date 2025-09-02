import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function Cadastrar({ navigation, pessoas, setPessoas }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  function salvar() {
    if (!nome.trim() || !email.trim() || !telefone.trim() || !senha.trim()) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    const novo = {
      id: Date.now().toString(),
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      senha: senha.trim(),
    };

    setPessoas((prev) => [novo, ...prev]);

    // Limpa os campos
    setNome("");
    setEmail("");
    setTelefone("");
    setSenha("");

    // Vai para a tela de lista
    navigation.navigate("Lista");
  }

  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Cadastrar-se</Text>

          {/* Nome */}
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={24} color="#e91e63" />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={24} color="#e91e63" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Telefone */}
          <View style={styles.inputContainer}>
            <Ionicons name="call" size={24} color="#e91e63" />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              keyboardType="phone-pad"
              value={telefone}
              onChangeText={setTelefone}
            />
          </View>

          {/* Senha */}
          <View style={styles.inputContainer}>
            <FontAwesome5 name="lock" size={20} color="#e91e63" />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          {/* Botão */}
          <TouchableOpacity style={styles.button} onPress={salvar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          {/* Botão Ver Lista */}
          <TouchableOpacity
            style={[styles.button, { marginTop: 10 }]}
            onPress={() => navigation.navigate("Lista")}
          >
            <Text style={styles.buttonText}>Ver Lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fffaf0",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e91e63",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e91e63",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  button: {
    backgroundColor: "#e91e63",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    backgroundColor: "#e91e63",
    fontSize: 18,
    fontWeight: "bold",
  },
});
