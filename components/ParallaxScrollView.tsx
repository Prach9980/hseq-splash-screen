import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import MenuButton from "./MenuButton";

type Props = PropsWithChildren<{}>;

export default function ParallaxScrollView({ children }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  return (
    <ThemedView style={styles.container}>
      <MenuButton />
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        contentContainerStyle={styles.container}
      >
        <ThemedView style={styles.container}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
