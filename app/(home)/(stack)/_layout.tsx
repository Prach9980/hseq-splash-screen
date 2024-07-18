import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import DrawerWrapper from "@/components/DrawerComponent/DrawerWrapper";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  return (
    <DrawerWrapper>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor:
                colorScheme === "dark"
                  ? Colors.dark.background
                  : Colors.light.background,
            },
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="about" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </DrawerWrapper>
  );
}
