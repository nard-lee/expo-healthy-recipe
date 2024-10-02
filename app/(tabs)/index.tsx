import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "../../context/ThemeContext";
import HomeCategory from "@/partials/HomeCategory";
import SearchPanel from "@/partials/SearchPanel";
import Statusbar from "@/partials/Statusbar";
import { useConnection } from "@/hooks/useConnection";
import ConnectPanel from "@/partials/ConnectPanel";

export default function Home() {
  const { theme } = useTheme();
  const isOnline = useConnection();

  const bg_primary: string = theme.colors.bg_primary;
  const text_col: string = theme.colors.txt_col;

  return (
    <ImageBackground
      source={require("../../assets/logo/bg3.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View
        style={[styles.home, { backgroundColor: "rgba(255, 255, 255, 0.9)" }]}
      >
        <Statusbar />
        <ScrollView>
          <View style={[styles.h_md_col]}>
            <View style={[styles.banner_holder]}>
              <Image
                style={styles.banner}
                source={require("../../assets/images/banner1.jpg")}
                resizeMode="cover"
              />
            </View>
            <View style={styles.category_header}>
              <Feather name="grid" size={24} color={text_col} />
              <Text style={[styles.category_text, { color: text_col }]}>
                CATEGORIES
              </Text>
            </View>
            <HomeCategory />
            <View>
              <SearchPanel />
              <View style={[styles.top_recipe_header]}>
                <Text style={[styles.top_recipe_text, { color: text_col }]}>
                  TOP 10 RECIPE OF THE DAY
                </Text>
              </View>

              <View style={styles.top_recipe_list}>
                {/* {dishesData.map((item) => (
                <RecipePanel {...item}/>
              ))} */}
              </View>
            </View>
          </View>
        </ScrollView>
        {!isOnline && <ConnectPanel />}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: "100%",
  },
  h_md_col: {
    flexDirection: "column",
    gap: 15,
  },
  banner_holder: {
    width: "100%",
    height: 250,
    borderRadius: 5,
    position: "static",
    top: 0,
    // backgroundColor: 'green'
  },
  banner: {
    width: "100%",
    height: 250,
  },
  category_header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: 10,
    // backgroundColor:'red'
  },
  category_text: {
    fontFamily: "Aclonica",
    fontSize: 23,
    color: "#1a1a1a",
  },

  top_recipe_header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  top_recipe_text: {
    fontFamily: "OpenSans",
    fontSize: 12,
  },
  top_recipe_list: {
    flexDirection: "column",
    padding: 10,
  },
  top_recipe_panel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    // backgroundColor: 'pink'
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
  heart_btn: {
    position: "absolute",
    right: 20,
    top: 20,
    padding: 5,
    borderRadius: 10,
  },
  active_panel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
});
