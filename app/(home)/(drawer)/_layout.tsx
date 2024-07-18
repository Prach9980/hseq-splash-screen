import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@/components/DrawerComponent/CustomDrawer";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: "transparent",
          swipeEdgeWidth: 180,
          drawerStyle: {
            backgroundColor: "blue",
            width: "60%",
          },
          sceneContainerStyle: {
            backgroundColor: "blue",
          },
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      />
    </GestureHandlerRootView>
  );
}
