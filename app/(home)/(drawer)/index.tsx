import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { Redirect, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DrawerWrapper from "@/components/DrawerComponent/DrawerWrapper";

export default function HomeScreen() {
  const [isFreshInstall, setIsFreshInstall] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CheckIsFreshInstalled();
  }, [isFreshInstall]);

  const CheckIsFreshInstalled = async () => {
    const value = await AsyncStorage.getItem("isFreshInstall");
    if (value === "false") {
      setIsFreshInstall(false);
      setIsLoading(false);
    } else setIsLoading(false);
  };

  if (isLoading) return null;

  if (isFreshInstall && !isLoading) return <Redirect href="onboarding" />;

  return (
    <DrawerWrapper>
      <ThemedView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemedText>Home</ThemedText>
      </ThemedView>
    </DrawerWrapper>
  );
}
