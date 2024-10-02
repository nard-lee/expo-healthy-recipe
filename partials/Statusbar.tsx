import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function Statusbar() {
  return (
    <View>
      <LinearGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: 20,
          zIndex: 2,
        }}
      />
      <StatusBar style="light" />
    </View>
  );
}
