import { StyleSheet, Text, View, Image, ActivityIndicator, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { supabase } from "@/database/supabase";
import { useTheme } from "@/context/ThemeContext";
import { router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

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
    ingredient: Ingredient[];
    instruction: Instruction[];
  }

  const params = useLocalSearchParams();
  const { recipe_id } = params;
  const { theme } = useTheme();

  const bg_primary: string = theme.colors.bg_primary;
  const text_col: string = theme.colors.txt_col;

  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data, error } = await supabase
          .from("recipe")
          .select("title, description, ingredient, instruction")
          .eq("recipe_id", recipe_id);

        if (error) {
          setError("Error fetching dessert recipes");
        } else {
          setRecipe(data);
        }
      } catch (error) {
        setError("Error during query");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <View style={[ { height: "100%",backgroundColor: bg_primary }]}>
      {error && <Text>error { error }</Text>}
      {loading && <ActivityIndicator style={styles.sc_load} size="large" />}
      {recipe.length > 0 && (<Pressable
        style={{ position: 'absolute', top: 20, left: 10, zIndex: 1 }}
        onPress={() => router.back()}
        android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
      >
        <Entypo name="chevron-small-left" size={30} color={text_col} />
      </Pressable>)}
      {recipe.length > 0 && (
        <View style={[styles.recipe_holder, { backgroundColor: bg_primary }]}>
          <Image
            style={styles.banner}
            source={require("../assets/images/csalad.jpg")}
            resizeMode="cover"
          />
          <View style={styles.recipe_panel}>
            <Text style={[styles.recipe_title, { color: text_col }]}>{recipe[0].title}</Text>
            <View>
              <Text style={[styles.recipe_desc, { color: text_col }]}>{recipe[0].description}</Text>
            </View>
            <View>
              {recipe[0].ingredient.map((item: Ingredient) => (
                <Text key={item.name} style={{ color: text_col }}>{item.name}</Text>
              ))}
            </View>
            <View>
              {recipe[0].instruction.map((item: Instruction) => (
                <Text key={item.step_number} style={{ color: text_col }}>{item.description}</Text>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
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
  banner: {
    width: "100%",
    height: 250,
  },
  recipe_title: {
    fontFamily: "Aclonica",
    fontSize: 20,
  },
  recipe_desc: {
    fontFamily: "Poppins",
  },
  recipe_panel: {
    flexDirection: "column",
    gap: 10,
    padding: 20,
  }
});
