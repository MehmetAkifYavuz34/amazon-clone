import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Category } from "../data/Categories";
import { useNavigation } from "@react-navigation/native";

const Categroies = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {Category.map((item) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductScreen")}
          style={styles.category}
          key={item.id}
        >
          <Image style={styles.imgstyle} source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categroies;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imgstyle: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2c4341",
    paddingTop: 5,
    textAlign: "center",
  },
  category: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
});
