import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Lista({ navigation, pessoas, setPessoas }) {
  function deletar(id) {
    setPessoas((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Cadastros</Text>

      {pessoas.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 16 }}>
          Nenhum cadastro ainda.
        </Text>
      ) : (
        <FlatList
          data={pessoas}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.label}>Nome: {item.nome}</Text>
              <Text style={styles.label}>Email: {item.email}</Text>
              <Text style={styles.label}>Telefone: {item.telefone}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deletar(item.id)}
              >
                <Text style={styles.deleteButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={[styles.deleteButton, { backgroundColor: "#2196f3", marginTop: 20 }]}
        onPress={() => navigation.navigate("Cadastrar")}
      >
        <Text style={styles.deleteButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  item: {
    padding: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 6,
  },
  deleteButton: {
    backgroundColor: "#e91e63",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
