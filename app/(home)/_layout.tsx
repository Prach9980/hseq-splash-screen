import { StyleSheet } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@/components/DrawerComponent/CustomDrawer";

export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: "transparent",
          swipeEdgeWidth: 180,
          drawerStyle: {
            backgroundColor: "#0A8ED9",
            width: "60%",
          },
          drawerPosition: "left",
          sceneContainerStyle: {
            backgroundColor: "#0A8ED9",
          },
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
