import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import { Text } from "react-native";

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const path = usePathname();

  return (
    <DrawerContentScrollView
      {...props}
      style={{
        marginTop: 100,
        padding: 0,
        marginLeft: 0,
      }}
    >
      <DrawerItem
        style={{
          backgroundColor: path === "/" ? "white" : "transparent",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        }}
        label={() => (
          <Text style={{ color: path === "/" ? "#0A8ED9" : "white" }}>
            Home
          </Text>
        )}
        onPress={() => {
          router.push("/");
        }}
      />
      <DrawerItem
        style={{
          backgroundColor: path === "/about" ? "white" : "transparent",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        }}
        label={() => (
          <Text style={{ color: path === "/about" ? "#0A8ED9" : "white" }}>
            About
          </Text>
        )}
        onPress={() => {
          router.push("/about");
        }}
      />
    </DrawerContentScrollView>
  );
}
