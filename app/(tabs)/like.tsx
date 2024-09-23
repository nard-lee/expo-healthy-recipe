import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
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
    <View
      style={{
        flex: 1,
        paddingTop: "5%",
        flexDirection: "column",
        gap: 10,
        backgroundColor: bg_primary,
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
        <View style={[styles.saved_recipe_list]}>
          {dishesData.map((item) => (
            <Pressable
              key={item.id}
              android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
              style={styles.top_recipe_panel}
            >
              <View style={styles.top_recipe_icon}>
                <Image
                  style={styles.top_recipe_img}
                  source={item.src}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.top_recipe_desc}>
                <Text style={[styles.title_text, { color: text_col }]}>
                  {item.name}
                </Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={[styles.desc_text, { width: 250, color: text_col }]}
                >
                  {item.shortDescription}
                </Text>
              </View>
              <Pressable>
                <Feather name="heart" size={15} color={text_col} />
              </Pressable>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
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
