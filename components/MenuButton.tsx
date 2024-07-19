import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function MenuButton() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <Ionicons
      style={{ position: "absolute", top: 10, left: 20 }}
      name="menu"
      size={30}
      color="black"
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
}
