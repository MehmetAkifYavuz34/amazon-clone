import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#bbe8ef", "#bdeee9", "#c3f1e3"]}
    >
      <Feather name="map-pin" size={16} color="black" />
      <Text style={styles.deliver}>Delive to Turkey - 232442</Text>
      <AntDesign name="down" size={12} color="black" />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  deliver: {
    fontSize: 13,
    color: "#2c4341",
    paddingHorizontal: 6,
    fontWeight: "600",
  },
});
