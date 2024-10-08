import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { supabase } from "@/database/supabase";
import { useTheme } from "@/context/ThemeContext";
import { router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import * as Speech from "expo-speech";
import Player from "@/partials/Player";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import Statusbar from "@/partials/Statusbar";

export default function Recipe() {
  interface Ingredient {
    name: string;
    quantity: string;
  }

  interface Instruction {
    description: string;
    step_number: number;
  }

  interface Recipe {
    title: string;
    description: string;
    category: string;
    img_url: string;
    ingredient: Ingredient[];
    instruction: Instruction[];
  }

  const params = useLocalSearchParams();
  const { recipe_id } = params;
  const { theme } = useTheme();

  const text_col: string = theme.colors.txt_col;

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [ingredient, setIngredient] = useState<Ingredient[] | undefined>(
    undefined
  );
  const [instruction, setInstruction] = useState<Instruction[] | undefined>(
    undefined
  );
  const [recipeImg, setRecipeImg] = useState<string>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollY = useSharedValue(0);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data, error } = await supabase
          .from("recipe")
          .select("title, description, ingredient, instruction, img_url")
          .eq("recipe_id", recipe_id)
          .single();

        if (error) {
          setError(error.message || "Error fetching dessert recipes");
        } else {
          setRecipe(data);
          setIngredient(JSON.parse(data.ingredient).ing);
          setInstruction(JSON.parse(data.instruction).steps);
        }
      } catch (error) {
        setError("Error during query");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipe_id]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("hr_bucket")
          .getPublicUrl(recipe?.img_url);

        setRecipeImg(data["publicUrl"]);

        if (error) {
          console.error("Error fetching image:", error);
          return;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchImage();
  }, [recipe]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(scrollY.value, [0, 100], [0, -30]);
    return {
      transform: [{ translateY }],
    };
  });

  console.log(recipeImg)

  return (
    <ImageBackground
      source={require("../assets/logo/bg.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Statusbar />
      <View
        style={[
          { height: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)" },
        ]}
      >
        {error && <Text style={{ color: text_col }}>Error: {error}</Text>}
        {loading && <ActivityIndicator style={styles.sc_load} size="large" />}
        {recipe && (
          <Pressable
            style={styles.back_btn}
            onPress={() => {
              router.back();
              Speech.stop();
            }}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Entypo
              style={{ textAlign: "center" }}
              name="chevron-small-left"
              size={30}
              color="#000"
            />
          </Pressable>
        )}
        {recipe && (
          <View
            style={[
              styles.recipe_holder,
              { backgroundColor: "rgba(255, 255, 255, 0.5)" },
            ]}
          >
            <ScrollView
              onScroll={(event) => {
                scrollY.value = event.nativeEvent.contentOffset.y; // Update scroll position
              }}
              scrollEventThrottle={5}
            >
              <Animated.View style={[styles.banner, animatedStyle]}>
                {recipe && recipeImg && (
                  <Image
                    style={styles.bannerImage}
                    source={{uri: recipeImg}}
                    resizeMode="cover"
                  />
                )}
              </Animated.View>
              <View style={styles.recipe_panel}>
                <Text style={[styles.recipe_title, { color: text_col }]}>
                  {recipe.title}
                </Text>
                <Text style={[styles.recipe_desc, { color: text_col }]}>
                  {recipe.description}
                </Text>
                <Text
                  style={[
                    { fontFamily: "Poppins", fontSize: 20 },
                    { color: text_col },
                  ]}
                >
                  Ingredients
                </Text>
                <View
                  style={{ flexDirection: "column", gap: 4, flexWrap: "wrap" }}
                >
                  {ingredient &&
                    ingredient.map((item: Ingredient) => (
                      <Text
                        key={item.name}
                        style={{
                          color: text_col,
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          padding: 10,
                          borderRadius: 8,
                          fontFamily: "Poppins",
                          width: "100%",
                        }}
                      >
                        {item.quantity} {item.name}
                      </Text>
                    ))}
                </View>
                <Text
                  style={[
                    { fontFamily: "Poppins", fontSize: 20 },
                    { color: text_col },
                  ]}
                >
                  Instructions
                </Text>
                <View style={styles.step_list}>
                  {instruction &&
                    instruction.map((item: Instruction) => (
                      <View key={item.step_number} style={styles.step_panel}>
                        <Text style={{ color: text_col }}>
                          {item.step_number}.{" "}
                        </Text>
                        <Text
                          style={{
                            color: text_col,
                            fontFamily: "Poppins",
                            fontSize: 17,
                          }}
                        >
                          {item.description}
                        </Text>
                      </View>
                    ))}
                </View>
              </View>
            </ScrollView>
            <Player
              ingredient={ingredient}
              instruction={instruction}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  recipe_holder: {
    flexDirection: "column",
    gap: 10,
  },
  sc_load: {
    position: "absolute",
    top: 100,
    left: "45%",
  },
  back_btn: {
    position: "absolute",
    top: 30,
    left: 10,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 40,
    width: 40,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  banner: {
    width: "100%",
    height: 250,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  recipe_title: {
    fontFamily: "Poppins",
    fontSize: 30,
  },
  recipe_desc: {
    fontFamily: "Poppins",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  recipe_panel: {
    flexDirection: "column",
    gap: 10,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "relative",
    top: 0,
    height: "100%",
    zIndex: 1,
    borderWidth: 1,
  },
  step_list: {
    gap: 10,
  },
  step_panel: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  audio_btn: {
    position: "absolute",
    top: 30,
    right: 10,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 40,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
