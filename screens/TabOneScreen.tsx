import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { TextInput } from "react-native";

import { useState } from "react";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [peso, setPeso] = useState("78");
  const [altura, setAltura] = useState("188");
  const [edad, setEdad] = useState("25");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora macros</Text>
      <View style={styles.separator} lightColor="#eee" />
      <View style={styles.firstline}>
        <View>
          <Text style={styles.label}>Peso (Kg)</Text>
          <TextInput
            placeholder={"peso"}
            placeholderTextColor="gray"
            style={styles.input}
            onChangeText={(val) => setPeso(val)}
          />
        </View>
        <View>
          <Text style={styles.label}>Altura (cm)</Text>
          <TextInput
            placeholder={altura}
            style={styles.input}
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={styles.firstline}>
        <View>
          <Text style={styles.label}>Edad</Text>
          <TextInput
            placeholder={edad}
            style={styles.input}
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={styles.firstline}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  firstline: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    borderRadius: 20,
    textAlign: "center",
    padding: 5,
    color: "black",
    backgroundColor: "white",
    marginHorizontal: 10,
    width: 150,
  },
});
