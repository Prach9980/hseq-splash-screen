import { View, Text, Animated, useWindowDimensions } from "react-native";
import React from "react";
import { TOnboardingData } from "@/types/global";

interface IProps {
  data: TOnboardingData[];
  scrollX: Animated.Value;
}

export default function OnBoardingPaginator(props: IProps) {
  const { data, scrollX } = props;
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
      }}
    >
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index}
            style={{
              width: dotWidth,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#333",
              marginHorizontal: 4,
              opacity,
            }}
          />
        );
      })}
    </View>
  );
}
