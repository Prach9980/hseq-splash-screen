import {
  View,
  Text,
  useWindowDimensions,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { TOnboardingData } from "@/types/global";

export default function OnBoardingItem({ item }: { item: TOnboardingData }) {
  const { title, description, image, extendedDescription } = item;
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: width,
      }}
    >
      <Image
        source={image as ImageSourcePropType}
        style={{
          flex: 0.7,
          justifyContent: "center",
          width,
          resizeMode: "contain",
        }}
      />
      <View
        style={{
          flex: 0.3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24 }}>{title}</Text>
        <Text
          style={{
            textAlign: "center",
            paddingLeft: 80,
            paddingRight: 80,
            lineHeight: 20,
          }}
        >
          {description}
        </Text>
        {extendedDescription && (
          <Text
            style={{
              textAlign: "center",
              paddingLeft: 60,
              paddingRight: 60,
              lineHeight: 20,
            }}
          >
            {extendedDescription}
          </Text>
        )}
      </View>
      {/* <Image
        source={require("@/assets/images/divider.png")}
        style={{ width: width, height: 5 }}
      /> */}
    </View>
  );
}
