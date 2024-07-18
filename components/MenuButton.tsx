import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function MenuButton() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const CanGoBack = navigation.canGoBack();
  const IconAction = () =>
    CanGoBack
      ? navigation.goBack()
      : navigation.dispatch(DrawerActions.toggleDrawer());
  console.log(CanGoBack);
  return (
    <Ionicons
      style={{ position: "absolute", top: 80, left: 20 }}
      name={CanGoBack ? "chevron-back" : "menu"}
      size={40}
      color={colorScheme === "dark" ? "white" : "black"}
      onPress={IconAction}
    />
  );
}
