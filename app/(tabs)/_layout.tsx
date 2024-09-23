import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "../../context/ThemeContext";
// import { useConnection } from "@/hooks/useConnection";
export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.bg_primary,
          paddingLeft: "20%",
          paddingRight: "20%",
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Feather name="home" size={24} color={theme.colors.txt_col} />
          ),
          tabBarItemStyle: {},
        }}
      />
      <Tabs.Screen
        name="like"
        options={{
          title: "like",
          tabBarIcon: () => (
            <Feather name="heart" size={24} color={theme.colors.txt_col} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: () => (
            <Feather name="user" size={24} color={theme.colors.txt_col} />
          ),
        }}
      />
    </Tabs>
  );
}
