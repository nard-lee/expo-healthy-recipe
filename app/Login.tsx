import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../context/ThemeContext";
import { router } from "expo-router";

export default function Login() {
  const { theme } = useTheme();

  const bg_primary: string = theme.colors.bg_primary;
  const bg_secondary: string = theme.colors.bg_secondary;
  const text_col: string = theme.colors.txt_col;

  return (
    <View
      style={[
        styles.form_container,
        {
          backgroundColor: bg_primary,
        },
      ]}
    >
      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
      <View style={{ padding: 10, paddingLeft: 10 }}>
        <Pressable
          onPress={() => router.back()}
          android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
        >
          <Entypo name="chevron-small-left" size={30} color={text_col} />
        </Pressable>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Aclonica",
            color: text_col,
          }}
        >
          Healthy Recipe
        </Text>
      </View>
      <View style={[styles.form]}>
        <View style={styles.input_block}>
          <Entypo
            style={styles.input_icon}
            name="email"
            size={24}
            color={text_col}
          />
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: bg_secondary,
                color: text_col,
              },
            ]}
            placeholder="Email"
            placeholderTextColor={text_col}
          />
        </View>
        <View style={styles.input_block}>
          <Entypo
            style={styles.input_icon}
            name="lock"
            size={24}
            color={text_col}
          />
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: bg_secondary,
                color: text_col,
              },
            ]}
            placeholder="Password"
            placeholderTextColor={text_col}
          />
        </View>
        <Pressable style={styles.form_btn}>
          <Text style={styles.btn_text}>Login</Text>
        </Pressable>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              alignContent: "flex-end",
              fontFamily: "OpenSans",
              color: text_col,
            }}
          >
            Havent signed up?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form_container: {
    flex: 1,
    gap: 50,
    flexDirection: "column",
    paddingTop: "10%",
  },
  form: {
    width: "100%",
    flexDirection: "column",
    gap: 10,
    padding: 30,
  },
  input_block: {
    position: "relative",
  },
  input_icon: {
    position: "absolute",
    zIndex: 1,
    left: 15,
    top: 15,
    fontSize: 15,
  },
  input: {
    padding: 10,
    paddingLeft: 40,
    width: "100%",
    borderRadius: 10,
    fontFamily: "OpenSans",
  },
  form_btn: {
    // backgroundColor: "#fff",
    padding: 10,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#5d6ba2",
  },
  btn_text: {
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
