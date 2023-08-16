import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import ListOfItems from "./components/ListOfItems";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Buy milk", key: "1" },
    { text: "Buy car", key: "2" },
    { text: "Buy dog", key: "3" },
    { text: "Buy house", key: "4" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => [
      { text: text, key: Math.random().toString(36).substring(7) },
      ...list,
    ]);
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => list.filter((item) => item.key !== key));
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListOfItems el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Your styles here
});
