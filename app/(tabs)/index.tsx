import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "../../context/ThemeContext";
import dishesData from "../../utils/topTen";
import { supabase } from "@/database/supabase";
import { useRouter } from "expo-router";
// import { genID } from '@/utils/genID';
// import { recipes } from "@/utils/recipe";
import HomeCategory from "@/partials/HomeCategory";
import SearchPanel from "@/partials/SearchPanel";

export default function Home() {
  interface Recipe {
    recipe_id: string;
    title: string;
    description: string;
    category: string;
    created_at: Date;
    img_url: string;
    ingredient: any;
    instruction: any;
  }

  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data, error } = await supabase.from("recipe").select("*");
      if (error) {
        console.error(error);
      } else {
        setRecipe(data || []);
      }
    };

    fetchRecipe();
  }, []);

  // {recipe && console.log(recipe)}

  const { theme } = useTheme();

  const bg_primary: string = theme.colors.bg_primary;
  const text_col: string = theme.colors.txt_col;

  return (
    <View
      style={[
        styles.home,
        {
          backgroundColor: bg_primary,
        },
      ]}
    >
      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
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
          {/* category */}
          <HomeCategory/>
          {/* category */}
          <View>
            {/* search */}
            <SearchPanel/>
            {/* search */}
            <View style={[styles.top_recipe_header]}>
              {/* <AntDesign name="staro" size={24} color={text_col} /> */}
              <Text style={[styles.top_recipe_text, { color: text_col }]}>
                TOP 10 RECIPE OF THE DAY
              </Text>
            </View>

            <View style={styles.top_recipe_list}>
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
                      style={[
                        styles.desc_text,
                        { width: "95%", color: text_col },
                      ]}
                    >
                      {item.shortDescription}
                    </Text>
                  </View>
                  <Pressable
                    android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
                    style={[styles.heart_btn]}
                  >
                    <Feather name="heart" size={15} color={text_col} />
                  </Pressable>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
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
});
