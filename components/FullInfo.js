import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gStyle } from "../styles/styles";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Image style={styles.img} source={{ uri: route.params.img }} />
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  img: {
    width: "100%",
    height: 200,
  },
});
