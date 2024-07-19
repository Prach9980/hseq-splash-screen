import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MenuButton from "@/components/MenuButton";
import OnBoarding from "../onboarding";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Text } from "react-native";

export default function HomeScreen() {
  const [isFreshInstall, setIsFreshInstall] = useState(false);

  const CheckIsFreshInstall = async () => {
    const isFreshInstall = await AsyncStorage.getItem("isFreshInstall");
    if (isFreshInstall === null) setIsFreshInstall(true);
  };
  CheckIsFreshInstall();

  if (isFreshInstall) {
    return <OnBoarding />;
  }

  return (
    <ParallaxScrollView>
      <Text>Home</Text>
    </ParallaxScrollView>
  );
}
