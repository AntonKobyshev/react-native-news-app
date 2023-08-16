import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Todo list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: "silver",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});
