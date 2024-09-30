import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Switch,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../../context/ThemeContext";
import * as SecureStore from "expo-secure-store";
import { supabase } from "@/database/supabase";
import { useUser } from "@/context/UserContext";
import { useTabContext } from "@/context/TabContext";

interface User {
  f_name: string;
  l_name: string;
  status: string;
  role: string;
}

export default function User() {
  const { theme, toggleTheme } = useTheme();
  const [isSwitch, setIsSwitch] = useState(theme.mode === "dark");
  const bg_primary: string = theme.colors.bg_primary;
  const text_col: string = theme.colors.txt_col;

  const { activeTab } = useTabContext();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>();

  const toggleSwitch = () => {
    toggleTheme();
    setIsSwitch((prev) => !prev);
  };

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const user_id = await SecureStore.getItemAsync("user_id");
      if (user_id) {
        const { data, error } = await supabase
          .from("user")
          .select("f_name, l_name, status, role")
          .eq("user_id", user_id);

        if (error) {
          console.error("Error fetching user:", error);
        } else if (data.length > 0) {
          setUser(data[0]);
        }
      } else {
        setLoading(true);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getUser();
  }, [activeTab]);

  const Logout = async () => {
    await SecureStore.setItemAsync("user_id", "");
    setUser(null);
  };

  return (
    <ImageBackground
      source={require("../../assets/logo/bg.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
        {loading ? (
          <View style={styles.profile_holder}>
            <ActivityIndicator size="large" color={text_col} />
          </View>
        ) : user ? (
          <View style={styles.profile_holder}>
            <Text
              style={{ color: text_col, fontFamily: "Poppins", fontSize: 30 }}
            >
              {user.f_name} {user.l_name}
            </Text>
            <Pressable
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                padding: 7,
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 5,
              }}
              onPress={Logout}
            >
              <Text style={{ color: text_col, fontFamily: 'Poppins' }}>logout</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.profile_holder}>
            <Feather name="user" size={110} color={text_col} />
            <View style={styles.form_btn}>
              <Pressable style={styles.btn_press}>
                <Link
                  href="/Login"
                  style={[styles.l_btn_text, { color: text_col }]}
                >
                  Login
                </Link>
              </Pressable>
              <Text style={{ color: text_col }}>or</Text>
              <Pressable style={styles.btn_press}>
                <Link
                  href="/Signup"
                  style={[styles.l_btn_text, { color: text_col }]}
                >
                  Signup
                </Link>
              </Pressable>
            </View>
          </View>
        )}
        <View style={styles.option_list}>
          {/* <View style={styles.theme_btn}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              {theme.mode === "light" ? (
                <Feather name="sun" size={27} color={text_col} />
              ) : (
                <Feather name="moon" size={24} color={text_col} />
              )}
              <Text style={[styles.opt_text, { color: text_col }]}>Dark</Text>
            </View>
            <Switch
              trackColor={{ false: "#f2f2f2", true: "#81b0ff" }}
              thumbColor={isSwitch ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isSwitch}
            />
          </View> */}
          <Pressable
            style={styles.opt_btn}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Feather name="settings" size={27} color="#2e5cb8" />
            <Link href="/" style={[styles.opt_text, { color: text_col }]}>
              Settings
            </Link>
          </Pressable>
          <Pressable
            style={styles.opt_btn}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Feather name="info" size={27} color="#cc6600" />
            <Link href="/" style={[styles.opt_text, { color: text_col }]}>
              About
            </Link>
          </Pressable>
          <Pressable
            style={styles.opt_btn}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          >
            <Feather name="power" size={27} color="red" />
            <Link href="/" style={[styles.opt_text, { color: text_col }]}>
              Quit
            </Link>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  user_container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10%",
  },
  profile_holder: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  form_btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn_press: {
    padding: 3,
    borderRadius: 8,
    width: 80,
    textAlign: "center",
    alignItems: "center",
  },
  l_btn_text: {
    fontFamily: "Poppins",
    fontSize: 15,
  },
  option_list: {
    flex: 1,
    flexDirection: "column",
    flexGrow: 1,
    // backgroundColor: "green",
    width: "100%",
    gap: 5
  },
  theme_btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  opt_btn: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  opt_text: {
    fontFamily: "Poppins",
    fontSize: 17,
  },
});
