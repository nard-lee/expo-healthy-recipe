import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useTabContext } from "@/context/TabContext";
// import { useTheme } from "../../context/ThemeContext";

const tabId: string[] = ["index", "like", "user"];

function getTextBeforeCharacter(text: string, character: string): string {
  const lastIndex = text.lastIndexOf(character);
  if (lastIndex !== -1) {
    return text.substring(0, lastIndex);
  } else {
    return text;
  }
}

export default function TabLayout() {
  const { setActiveTab } = useTabContext();
  const [active, setActive] = useState<string>(tabId[0]);

  return (
    <Tabs
      screenListeners={{
        tabPress: (event) => {
          const tabName = event.target as string;
          setActiveTab(tabName);
          let active_t = getTextBeforeCharacter(tabName, "-");
          setActive(active_t);
          console.log("text: ", active);
        },
      }}
      screenOptions={{
        tabBarActiveTintColor: "green",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingLeft: "20%",
          paddingRight: "20%",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Feather
              name="home"
              size={24}
              color={active == tabId[0] ? "green" : "#333"}
            />
          ),
          tabBarItemStyle: {},
        }}
      />
      <Tabs.Screen
        name="like"
        options={{
          title: "like",
          tabBarIcon: () => (
            <Feather
              name="heart"
              size={24}
              color={active == tabId[1] ? "green" : "#333"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: () => (
            <Feather
              name="user"
              size={24}
              color={active == tabId[2] ? "green" : "#333"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
