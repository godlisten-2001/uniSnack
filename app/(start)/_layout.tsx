import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function StartLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen
        name="SignIn"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
    </Stack>
  );
}
