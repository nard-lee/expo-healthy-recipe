import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { Dimensions } from "react-native";

interface RecipeData {
  recipe_id: number;
  title: string;
  description: string;
}

const { width } = Dimensions.get('window');

const RecipePanel: React.FC<RecipeData> = ({
  recipe_id,
  title,
  description,
}) => {
  return (
    <Pressable
      android_ripple={{ color: "rgba(0, 0, 0, 0.03)", radius: 200 }}
      style={styles.rp_panel}
      key={recipe_id}
      onPress={() =>
        router.navigate({
          pathname: "/Recipe",
          params: { recipe_id: recipe_id },
        })
      }
    >
      <Image
        source={require("../assets/images/csalad.jpg")}
        resizeMode="cover"
        style={{
          width: 65,
          height: 65,
          borderRadius: 10
        }}
      />
      <View style={styles.rp_info}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.rp_title}>
          {title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.rp_desc}>
          {description}
        </Text>
      </View>
      <Pressable
        style={styles.rp_like_btn}
        android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
      >
        <Feather name="heart" size={15} color="#333" />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rp_panel: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    gap: 10,
    borderRadius: 10,
    overflow:'hidden',
    padding: 5
  },
  rp_info: {
    flexDirection: "column",
  },
  rp_title: {
    fontFamily: "Poppins",
    fontSize: 16,
    width: width - 140,

  },
  rp_desc: {
    fontFamily: "OpenSans",
    color: "#333",
    width: width - 140,

  },
  rp_like_btn: {
    position: "absolute",
    right: 10,
  },
});

export default RecipePanel;
