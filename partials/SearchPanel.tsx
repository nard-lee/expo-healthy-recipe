import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "../context/ThemeContext";

export default function SearchPanel() {
  const { theme } = useTheme();
  const text_col: string = theme.colors.txt_col;
  const [filter, setFilter] = useState<string>();
  return (
    <View style={{ flexDirection: "column", gap: 10 }}>
      <View style={styles.search_panel}>
        <TextInput
          style={[styles.search_input]}
          placeholder="search content..."
          placeholderTextColor={text_col}
        />
        <Feather style={[styles.search_icon, { color: text_col }]} name="search" size={24} />

      </View>
      <View style={styles.tag_btn}>
        <Pressable style={styles.tag_title}>
          <Text style={[styles.tag_title_txt, { color: text_col }]}>healthy food</Text>
        </Pressable>
        <Pressable style={styles.tag_title}>
          <Text style={[styles.tag_title_txt, { color: text_col }]}>dessert</Text>
        </Pressable>
        <Pressable style={styles.tag_title}>
          <Text style={[styles.tag_title_txt, { color: text_col }]}>sweets</Text>
        </Pressable>
        <Pressable style={styles.tag_title}>
          <Text style={[styles.tag_title_txt, { color: text_col }]}>tomatoe sauce</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search_panel: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: 'orange'
  },
  search_input: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 20,
    fontFamily: "Poppins",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  search_icon: {
    position: "absolute",
    left: 20,
    color: "#ccc",
  },
  tag_btn: {
    paddingLeft: 10,
    flexDirection: "row",
    gap: 5,
  },
  tag_title: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  tag_title_txt: {
    fontSize: 12,
    fontFamily: "OpenSans",
    color: "rgba(0, 0, 0, 0.5)",
  },
});
