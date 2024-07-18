import {
  FlatList,
  View,
  Animated,
  TouchableOpacity,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { OnboardingData } from "@/constants/OnboardingData";
import OnBoardingItem from "@/components/OnBoardingComponents/OnBoardingItem";
import OnBoardingPaginator from "@/components/OnBoardingComponents/OnBoardingPaginator";

export default function onboarding() {
  const [currenIndex, setCurrenIndex] = useState(0);
  const scorllX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any[] }) => {
      setCurrenIndex(viewableItems[0].index);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  useEffect(() => {
    SetIsFreshInstall();
  }, []);

  const SetIsFreshInstall = async () => {
    var val = await AsyncStorage.getItem("isFreshInstall");
    if (val === "false") {
      router.push("(tabs)");
    }
  };

  const FinishOnBoarding = async () => {
    alert("Finish Onboarding");
    await AsyncStorage.setItem("isFreshInstall", "false");
    router.push("(tabs)");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ flex: 3 }}>
        <FlatList
          data={OnboardingData}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scorllX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
        />
        <View
          style={{
            flex: 0.2,
          }}
        >
          <Image
            source={require("@/assets/images/divider.png")}
            style={{ width: width, height: 5 }}
          />
        </View>
      </View>
      <OnBoardingPaginator data={OnboardingData} scrollX={scorllX} />
      <View
        style={{
          flex: 0.3,
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            borderColor: "black",
            width: 100,
            alignItems: "center",
          }}
          onPress={FinishOnBoarding}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "gray",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderColor: "black",
            width: 100,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "blue",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
