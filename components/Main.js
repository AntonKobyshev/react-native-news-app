import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { gStyle } from "../styles/styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool!",
      img: "https://api.time.com/wp-content/uploads/2015/04/google-sign.jpg?quality=85&w=3000",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqlUWCSKrLouR7_Ldi-iOmss2My3Gqla5EQ&usqp=CAU",
    },
    {
      name: "Facebook",
      anons: "Facebook!!!",
      full: "Facebook is cool!",
      img: "https://s.yimg.com/ny/api/res/1.2/Gq082JYjjAgiqXSK_wMBeg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://media.zenfs.com/zh-Hant-HK/homerun/motley_fool_hk_95/3a76113e07001cdacb864bbd099737ed",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <AntDesign
          name="closecircle"
          size={28}
          color="red"
          style={styles.iconClose}
          onPress={() => setModalWindow(false)}
        />
        <View style={gStyle.main}>
          <Text style={styles.title}>Add post</Text>
        </View>
      </Modal>
      <Ionicons
        name="add-circle-sharp"
        size={34}
        color="green"
        style={styles.iconAdd}
        onPress={() => setModalWindow(true)}
      />
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image style={styles.img} source={{ uri: item.img }} />
            <Text style={styles.title}> {item.name}</Text>
            <Text style={styles.anons}> {item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  img: {
    width: "100%",
    height: 200,
  },
  iconClose: {
    textAlign: "right",
    margin: 5,
  },
});
