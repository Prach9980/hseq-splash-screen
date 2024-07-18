import { View, Text } from "react-native";
import React from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function DrawerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  var progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.8]),
      },
    ],
    borderRadius: progress.value > 0 ? 20 : 0,
    overflow: "hidden",
    duration: 500,
  }));

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      {children}
    </Animated.View>
  );
}
