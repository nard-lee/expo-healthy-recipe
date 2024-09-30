import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Speech from "expo-speech";
import Entypo from '@expo/vector-icons/Entypo';

interface Ingredient {
  name: string;
  quantity: string;
}

interface Instruction {
  description: string;
  step_number: number;
}

interface RecipeProps {
  ingredient: Ingredient[];
  instruction: Instruction[];
}

const Player: React.FC<RecipeProps> = ({ ingredient, instruction }) => {
  const [isOut, setIsOut] = useState<boolean>(false);
  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const [currStep, setCurrStep] = useState<number>(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setIsOut(true);
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setIsOut(false);
  };

  let index: number = 0;

  const readText = () => {
    console.log(index);
    let isPaused: boolean = false;

    function speakNext() {
      setIsPlayed(true);

      if (isPlayed) {
        isPaused = true;
        setIsPlayed(false);
        Speech.stop();
        console.log("pause: ", index);
      } else if (index < instruction.length) {
        if (!isPaused) {
          Speech.speak(instruction[index].description, {
            onDone: () => {
              index++;
              setCurrStep(index);
              speakNext();
            },
          });
        }
      } else {
        Speech.stop();
        setIsPlayed(false);
        index = 0;
        setCurrStep(0);
      }
    }
    speakNext();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            paddingLeft: 20,
            paddingRight: 10,
          }}
        >
          <Pressable>
            <MaterialCommunityIcons
              name="skip-previous-circle-outline"
              size={30}
              color="#333"
            />
          </Pressable>
          <Pressable onPress={readText}>
            {!isPlayed && (
              <AntDesign name="playcircleo" size={30} color="#333" />
            )}
            {isPlayed && (
              <AntDesign name="pausecircleo" size={30} color="#333" />
            )}
          </Pressable>
          <Pressable>
            <MaterialCommunityIcons
              name="skip-next-circle-outline"
              size={30}
              color="#333"
            />
          </Pressable>
        </View>
      </Animated.View>
      <Pressable style={styles.audio_btn} onPress={isOut ? fadeOut : fadeIn}>
        <Entypo name="voicemail" size={24} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 30,
    right: 10,
    gap: 5,
  },
  fadingContainer: {
    backgroundColor: "#fff",
    elevation: 5,
    padding: 5,
    borderRadius: 10,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
  audio_btn: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 8,
    elevation: 3,
  },
});

export default Player;
