import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

//  the index screen will check the state of the user whether the user is logged in or not
// the screen will persist the state of the user
// will direct user to the respective screen
const index = () => {
  const goto = async () => {
    router.navigate("SignIn");
  };
  useEffect(() => {}, []);
  return (
    <View>
      <Text>index</Text>
      <TouchableOpacity onPress={goto}>
        <Text>to go another</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
