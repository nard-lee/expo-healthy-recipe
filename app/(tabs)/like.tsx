import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "../../context/ThemeContext";
import dishesData from "../../utils/topTen";
import SearchPanel from "@/partials/SearchPanel";

export default function Like() {
  const { theme } = useTheme();
  const bg_primary: string = theme.colors.bg_primary;
  const text_col: string = theme.colors.txt_col;

  return (
    <ImageBackground
      source={require("../../assets/logo/bg.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View
        style={{
          flex: 1,
          paddingTop: "5%",
          flexDirection: "column",
          gap: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
        <View style={styles.saved_title}>
          <Feather name="heart" size={24} color={text_col} />
          <Text style={[styles.saved_text, { color: text_col }]}>
            SAVED RECIPE
          </Text>
        </View>
        <SearchPanel />
        <ScrollView>
          <View style={[styles.saved_recipe_list]}></View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  saved_title: {
    paddingTop: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // backgroundColor: 'red'
  },
  saved_text: {
    fontFamily: "Aclonica",
  },
  saved_recipe_list: {},
  top_recipe_panel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  top_recipe_icon: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  top_recipe_img: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  top_recipe_desc: {},
  title_text: {
    fontFamily: "Poppins",
    fontSize: 15,
  },
  desc_text: {
    fontFamily: "OpenSans",
    fontSize: 13,
  },
});
