import { View, Text, TextInput, StyleSheet, Pressable, ImageBackground } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../context/ThemeContext";
import { router } from "expo-router";
import { useState } from "react";
import { supabase } from "@/database/supabase";
import { login_validator } from "@/utils/CustomValidator";
import * as SecureStore from 'expo-secure-store';


export default function Login() {
  const { theme } = useTheme();

  const bg_primary: string = theme.colors.bg_primary;
  const bg_secondary: string = theme.colors.bg_secondary;
  const text_col: string = theme.colors.txt_col;

  interface User {
    email: string;
    password: string;
  }

  const [errName, setErrName] = useState<User>({ email: "", password: "" });
  const [user, setUser] = useState<User>({ email: "", password: "" });

  const handleChange = (value: string, key: keyof User) => {
    setUser({ ...user, [key]: value });
  };

  const login = async () => {
    setErrName({ email: "", password: "" });
    const { status, err } = login_validator(user);

    if (status) setErrName(err);
    else
      try {
        const { data } = await supabase.rpc("email_exists", {
          email_to_check: user.email,
        });
        // console.log(data);
        if (data[0].email_exists == false) {
          setErrName((prev) => ({
            ...prev,
            email: "email doesn't exists",
          }));
          return;
        }

        if (data[0].user_password !== user.password) {
          setErrName((prev) => ({
            ...prev,
            password: "incorrect password",
          }));
          return;
        }

        await SecureStore.setItemAsync('user_id', data[0].user_id);
        setUser({email: '', password: ''});
        router.navigate('/(tabs)')

      } catch (error) {
        console.log(error);
      }
  };

  return (
    <ImageBackground
    source={require("../assets/logo/bg.jpg")}
    style={{ flex: 1 }}
    resizeMode="cover"
  >
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
            value={user.email}
            onChangeText={(value) => handleChange(value, "email")}
          />
        </View>
        {errName.email !== "" && (
          <Text style={[styles.err_msg]}>* {errName.email}</Text>
        )}

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
            value={user.password}
            onChangeText={(value) => handleChange(value, "password")}
          />
        </View>
        {errName.password !== "" && (
          <Text style={[styles.err_msg]}>* {errName.password}</Text>
        )}
        <Pressable style={styles.form_btn} onPress={() => login()}>
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
    </ImageBackground>
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
  err_msg: {
    color: "red",
    fontSize: 10,
    fontFamily: "Poppins",
    paddingTop: 5,
    paddingLeft: 5,
  },
});
