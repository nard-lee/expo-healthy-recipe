import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { supabase } from "@/database/supabase";
import { useTheme } from "../context/ThemeContext";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import RecipePanel from "@/partials/RecipePanel";
import Statusbar from "@/partials/Statusbar";

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
          .select("recipe_id, title, description");

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
    <ImageBackground
      source={require("../assets/logo/bg.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Statusbar />
      <View style={[styles.category, {}]}>
        {error && <Text>{error}</Text>}
        {loading && <ActivityIndicator style={styles.sc_load} size="large" />}
        {recipes && (
          <View style={styles.saved_title}>
            <Pressable
              style={styles.back_btn}
              onPress={() => router.back()}
              android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
            >
              <Entypo name="chevron-small-left" size={30} color={text_col} />
            </Pressable>

            <Text style={[styles.saved_text, { color: text_col }]}>
              {category} recipes
            </Text>
          </View>
        )}

        {recipes && (
          <ScrollView>
            <View style={[styles.saved_recipe_list]}>
              {recipes.map((item) => (
                <RecipePanel {...item} key={item.recipe_id} />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  sc_load: {
    position: "absolute",
    top: "45%",
    left: "45%",
  },
  back_btn: {
    width: 40,
    height: 35,
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    paddingTop: "5%",
    height: "100%",
  },
  saved_title: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  saved_text: {
    fontFamily: "Poppins",
    fontSize: 20,
  },
  saved_recipe_list: {
    flexDirection: "column",
    gap: 8,
    padding: 15,
    width: "100%",
  },
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
