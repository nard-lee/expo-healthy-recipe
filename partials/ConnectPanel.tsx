import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { useConnection } from "@/hooks/useConnection";
export default function ConnectPanel() {
  const isOnline = useConnection();
  return (
    <View>
    
      <View
        style={[
          styles.active_panel,
          { backgroundColor: !isOnline ? "red" : "green" },
        ]}
      >
        <Text>connecting...</Text>
        <ActivityIndicator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  active_panel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
});
