import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function HomeCategory() {
  const router = useRouter();

  return (
    <View style={[styles.h_category]}>
      <View style={styles.c_row}>
        <View style={styles.category_holder}>
          <Image
            style={styles.category}
            source={require("../assets/images/lg-meat.jpg")}
            resizeMode="cover"
          />

          <Pressable
            onPress={() =>
              router.navigate({
                pathname: "/Category",
                params: { category: "meat" },
              })
            }
            style={styles.category_title}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Text style={[styles.ct_text]}>MEAT RECIPE</Text>
          </Pressable>
        </View>
        <View style={styles.category_holder}>
          <Image
            style={styles.category}
            source={require("../assets/images/lg-vegie.jpg")}
            resizeMode="cover"
          />
          <Pressable
            onPress={() =>
              router.navigate({
                pathname: "/Category",
                params: { category: "vegetable" },
              })
            }
            style={styles.category_title}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Text style={[styles.ct_text]}>VEGETABLE RECIPE</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.c_row}>
        <View style={styles.category_holder}>
          <Image
            style={styles.category}
            source={require("../assets/images/lg-dessert.jpg")}
            resizeMode="cover"
          />
          <Pressable
            onPress={() =>
              router.navigate({
                pathname: "/Category",
                params: { category: "dessert" },
              })
            }
            style={styles.category_title}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Text style={[styles.ct_text]}>DESSERT</Text>
          </Pressable>
        </View>
        <View style={styles.category_holder}>
          <Image
            style={styles.category}
            source={require("../assets/images/lg-drink.jpg")}
            resizeMode="cover"
          />
          <Pressable
            onPress={() =>
              router.navigate({
                pathname: "/Category",
                params: { category: "beverage" },
              })
            }
            style={styles.category_title}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Text style={[styles.ct_text]}>BEVERAGES</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  h_category: {
    flexDirection: "column",
    gap: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  c_row: {
    flexDirection: "row",
    gap: 5,
    // backgroundColor: 'blue'
  },
  category_holder: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 150,
    position: "relative",
    borderRadius: 5,
  },
  category: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  category_title: {
    width: "100%",
    fontFamily: "OpenSans",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    height: "100%",
  },
  ct_text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingBottom: 10,
    paddingTop: 10,
    position: "absolute",
    bottom: 0.2,
    width: "100%",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
