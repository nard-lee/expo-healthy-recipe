import { Pressable, StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../../context/ThemeContext";

export default function User() {
  const { theme, toggleTheme } = useTheme();
  const [isSwitch, setIsSwitch] = useState(false);

  const bg_primary:string = theme.colors.bg_primary;
  const text_col:string = theme.colors.txt_col;

  const toggleSwitch = () => {
    toggleTheme();
    setIsSwitch((previousState) => !previousState);
  };

  // interface User {
  //   user_id: string;
  //   f_name: string;
  //   l_name: string;
  //   email: string;
  //   password: string;
  //   birthdate: Date;
  //   profile: string;
  //   created_at: Date;
  // }

  // const [data, setData] = useState<User[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase.from("user").select("*");
  //     if (error) {
  //       console.error(error);
  //     } else {
  //       setData(data || []);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // {data && console.log(data)}

  return (
    <View
      style={[
        styles.user_container,
        {
          backgroundColor: bg_primary,
        },
      ]}
    >
      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
      <View style={styles.profile_holder}>
        <Feather name="user" size={110} color={text_col} />
        <View style={styles.form_btn}>
          <Pressable style={styles.btn_press}>
            <Link
              href="/Login"
              style={[[styles.l_btn_text], { color: text_col }]}
            >
              login
            </Link>
          </Pressable>
          <Text style={{ color: text_col }}>or</Text>
          <Pressable style={styles.btn_press}>
            <Link
              href="/Signup"
              style={[[styles.l_btn_text], { color: text_col }]}
            >
              signup
            </Link>
          </Pressable>
        </View>
      </View>
      <View style={styles.option_list}>
        <View style={styles.theme_btn}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            {theme.mode == "light" && (
              <Feather name="sun" size={27} color={text_col} />
            )}
            {theme.mode == "dark" && (
              <Feather name="moon" size={24} color={text_col} />
            )}
            <Text style={[styles.opt_text, { color: text_col }]}>dark</Text>
          </View>
          <Switch
            trackColor={{ false: "#f2f2f2", true: "#81b0ff" }}
            thumbColor={isSwitch ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isSwitch}
          />
        </View>
        <Pressable
          style={styles.opt_btn}
          android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
        >
          <Feather name="settings" size={27} color="#2e5cb8" />
          <Link
            href="/"
            style={[
              styles.opt_text,
              {
                color: text_col,
              },
            ]}
          >
            Settings
          </Link>
        </Pressable>
        <Pressable
          style={styles.opt_btn}
          android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
        >
          <Feather name="info" size={27} color="#cc6600" />
          <Link
            href="/"
            style={[
              styles.opt_text,
              {
                color: text_col,
              },
            ]}
          >
            About
          </Link>
        </Pressable>
        <Pressable
          style={styles.opt_btn}
          android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
        >
          <Feather name="power" size={27} color="red" />
          <Link
            href="/"
            style={[
              styles.opt_text,
              {
                color: text_col,
              },
            ]}
          >
            Quit
          </Link>
        </Pressable>
      </View>
    </View>
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
  },
  opt_text: {
    fontFamily: "Poppins",
    fontSize: 17,
  },
});
