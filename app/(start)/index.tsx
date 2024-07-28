import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { router, useRootNavigationState } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { useAuthStore } from "@/store";

//  the index screen will check the state of the user whether the user is logged in or not
// the screen will persist the state of the user
// will direct user to the respective screen
const index = () => {
  const rootNavigationState = useRootNavigationState();
  const navigatorReady = rootNavigationState?.key != null;
  const usertoken = useAuthStore((state) => state.usertoken);
  useEffect(() => {
    // check the current state of the user
    if (!navigatorReady) return;
    if (usertoken.length == 0) {
      router.replace("SignIn");
    } else {
      router.replace("(tabs)");
    }
  }, [usertoken, navigatorReady]); // we render when the state of usertoken
  return (
    // we can add animation here or something else
    <View>
      <Text></Text>
    </View>
  );
};
export default index;
