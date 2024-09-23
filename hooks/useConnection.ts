import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";



export function useConnection() {
    const [isOnline, setOnline] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        setOnline(true);
      }
    });
    unsubscribe();
  }, []);
  return isOnline;
}
