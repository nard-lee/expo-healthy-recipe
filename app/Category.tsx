import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { supabase } from "@/database/supabase";
import { useTheme } from "../context/ThemeContext";
import { StatusBar } from "expo-status-bar";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import SearchPanel from "@/partials/SearchPanel";

export default function Category() {
  const params = useLocalSearchParams();
  const { category } = params;

  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { theme } = useTheme();
  const bg_primary: string = theme.colors.bg_primary;
  const text_col: string = theme.colors.txt_col;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data, error } = await supabase
          .from("recipe")
          .select("*")
          .eq("category", category);

        if (error) {
          setError("Error fetching dessert recipes");
        } else {
          setRecipes(data || []);
        }
      } catch (error) {
        setError("Error during query");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <View style={[styles.category, { backgroundColor: bg_primary }]}>
      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />

      {error && <Text>{error}</Text>}
      {recipes && (
        <View style={styles.saved_title}>
          <Pressable
            onPress={() => router.back()}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Entypo name="chevron-small-left" size={30} color={text_col} />
          </Pressable>
          <MaterialCommunityIcons
            name="food-outline"
            size={30}
            color={text_col}
          />
          <Text style={[styles.saved_text, { color: text_col }]}>
            {category}
          </Text>
        </View>
      )}
      {loading && <ActivityIndicator style={styles.sc_load} size="large" />}
      {recipes && (
        <ScrollView>
          <SearchPanel />
          <View style={[styles.saved_recipe_list]}>
            {recipes.map((item) => (
              <Pressable
                key={item.recipe_id}
                android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
                style={styles.top_recipe_panel}
                onPress={() =>
                  router.navigate({
                    pathname: "/Recipe",
                    params: { recipe_id: item.recipe_id },
                  })
                }
              >
                <View style={styles.top_recipe_icon}>
                  <Image
                    style={styles.top_recipe_img}
                    source={require("../assets/images/lg-vegie.jpg")}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.top_recipe_desc}>
                  <Text style={[styles.title_text, { color: text_col }]}>
                    {item.title}
                  </Text>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={[styles.desc_text, { width: 250, color: text_col }]}
                  >
                    {item.description}
                  </Text>
                </View>
                <Pressable>
                  <Feather name="heart" size={15} color={text_col} />
                </Pressable>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sc_load: {
    position: "absolute",
    top: "45%",
    left: "45%",
  },
  category: {
    paddingTop: "5%",
    height: "100%",
  },
  saved_title: {
    paddingTop: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    // backgroundColor: 'red'
  },
  saved_text: {
    fontFamily: "Aclonica",
    fontSize: 17,
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
