import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import CustomText from "@/components/CustomText";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <CustomText type="title">Register to unisnack</CustomText>
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
        onChangeText={(phone) => setPhone(phone)}
        value={phone}
        placeholder="Enter phone number"
        autoCapitalize="none"
        secureTextEntry={true}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        placeholder="confirm password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginbtn}>
        <CustomText style={styles.logintxt}>Register</CustomText>
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
                router.back();
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
                Go Back
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

export default Register;

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
