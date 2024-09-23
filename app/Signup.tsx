import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../context/ThemeContext";
import { router } from "expo-router";
import { useState } from "react";
import { supabase } from "@/database/supabase";
import { signup_validator } from "@/utils/CustomValidator";
import { genID } from "@/utils/genID";
const Signup = () => {
  const { theme } = useTheme();

  const bg_primary: string = theme.colors.bg_primary;
  const bg_secondary: string = theme.colors.bg_secondary;
  const text_col: string = theme.colors.txt_col;

  interface User {
    f_name: string;
    l_name: string;
    email: string;
    password: string;
  }
  
  const [errName, setErrName] = useState<User>({f_name: "",l_name: "",email: "",password: ""});
  const [user, setUser] = useState<User>({f_name: "",l_name: "",email: "",password: "",});

  const handleChange = (value: string, key: keyof User) => {
    setUser({ ...user, [key]: value });
  };

  const register = async () => {
    const { status, err } = signup_validator(user);
    if (status) setErrName(err);
    else
    try {
      const { error } = await supabase.from("user").insert({
        user_id: genID('user'),
        f_name: user.f_name,
        l_name: user.l_name,
        email: user.email,
        password: user.password
      });
      if (error){
        console.log(error.details)
        setErrName(prev => ({
          ...prev,
          email: error.details
        }))
        return;
      }
      // console.log("success")
      setUser({f_name: "",l_name: "",email: "",password: ""})
      setErrName({f_name: "",l_name: "",email: "",password: ""})
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.form_container, { backgroundColor: bg_primary }]}>
      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />

      <Pressable
        onPress={() => router.back()}
        android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
      >
        <Entypo name="chevron-small-left" size={30} color={text_col} />
      </Pressable>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Aclonica",
            fontSize: 40,
            color: text_col,
          }}
        >
          Healthy Recipe
        </Text>
      </View>
      <View style={[styles.form]}>
        <View style={styles.input_block}>
          <FontAwesome
            style={styles.input_icon}
            name="user"
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
            placeholder="First Name"
            placeholderTextColor={text_col}
            value={user.f_name}
            onChangeText={(value) => handleChange(value, "f_name")}
          />
          {errName.f_name !== '' && <Text style={[ styles.err_msg ]}>* { errName.f_name }</Text>}
        </View>
        <View style={styles.input_block}>
          <FontAwesome
            style={styles.input_icon}
            name="user"
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
            placeholder="Last Name"
            placeholderTextColor={text_col}
            value={user.l_name}
            onChangeText={(value) => handleChange(value, "l_name")}
          />
        </View>
        {errName.l_name != '' && <Text style={[ styles.err_msg ]}>* {errName.l_name}</Text>}
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
        {errName.email !== '' && <Text style={[ styles.err_msg ]}>* { errName.email }</Text>}
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
        {errName.password !== '' && <Text style={[ styles.err_msg ]}>* { errName.password }</Text>}
        <Pressable style={styles.form_btn} onPress={() => register()}>
          <Text style={styles.btn_text}>Signup</Text>
        </Pressable>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              alignContent: "flex-end",
              fontFamily: "OpenSans",
              color: text_col,
            }}
          >
            Already signed up?
          </Text>
        </View>
      </View>
    </View>
  );
};

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
    padding: 10,
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
    backgroundColor: "#fff",
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
    color: 'red',
    fontSize: 10,
    fontFamily: 'Poppins',
    paddingTop: 5,
    paddingLeft: 5
  }
});

export default Signup;
