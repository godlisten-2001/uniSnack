import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import CustomText from "@/components/CustomText";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const autheticateUser = async () => {
    try {
      if (username.length == 0) {
        alert("username cannot be empty");
      } else {
        // check username and password in the db
        // if correct allow store the user in store
        // if incorrect alert the user
        router.replace("(tabs)");
      }
      if (password.length == 0) {
        alert("please enter password");
      }
    } catch (error) {
      alert("Opps Error has occured please try again");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <CustomText type="title">Welcome to unisnack</CustomText>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Enter username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginbtn} onPress={autheticateUser}>
        <CustomText style={styles.logintxt}>Login</CustomText>
      </TouchableOpacity>

      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              height: 1,
              marginTop: 40,
              backgroundColor: "#fff",
            }}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                router.navigate("Register");
              }}
            >
              <CustomText
                style={{
                  width: 100,
                  padding: 0,
                  marginTop: 40,
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                Register
              </CustomText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              marginTop: 40,
              backgroundColor: "#fff",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#151515",
  },
  signtab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffff",
    marginTop: 80,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    borderRadius: 5,
  },
  tabitem: {
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 0,
    marginBottom: 0,
  },
  Logo: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10, // to constants
    margin: 10, // to constants
    height: 50,
    borderRadius: 5,
    // borderWidth: 2,
    borderColor: "#ccc",
  },
  loginbtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DC5F00",
    margin: 10,
    padding: 10,
    height: 50,
    borderRadius: 5,
  },
  logintxt: {
    color: "#fff",
    fontSize: 20,
  },
});
