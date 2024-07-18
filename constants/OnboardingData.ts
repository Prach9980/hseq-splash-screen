import { TOnboardingData } from "@/types/global";

export const OnboardingData: TOnboardingData[] = [
  {
    title: "Welcome to HSQE Master",
    description: "Get started with the app!",
    image: require("@/assets/images/onboarding1.png"),
  },
  {
    title: "Find your organization",
    description:
      "If you have received an HSEQ Master link from your organization, then exit the app and follow the link.",
    image: require("@/assets/images/onboarding2.png"),
  },
  {
    title: "Start making a difference",
    description:
      "The HSEQ Master app helps you to make a difference to others.",
    extendedDescription:
      "Make quick and easy registrations directly from your mobile device.",
    image: require("@/assets/images/onboarding3.png"),
  },
];
