import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

class Login extends Component {
  render() {
    return (
      <View style={style.body}>
        <View>
          <Image
            style={{
              width: "100%",
              height: 120
            }}
            source={require("../Assets/img/Vector.png")}
          />
          <Text style={style.textlogin}> SIGN IN </Text>
          <Text style={style.textKuy}>Kuy Musik</Text>
          <Text style={style.textJos}>Jos Jos Aye Aye</Text>
          <Text style={style.textGame}>Game</Text>
          <Text style={style.textPlease}>Welcome, Please login here</Text>
        </View>
        <View style={style.formLogin}>
          <TextInput style={style.textInput} placeholder="Username" />
          <TextInput style={style.textInput} placeholder="Password" />
          <Button
            color="#20a8e0"
            title="Sign In"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={style.footer}>
          <TouchableOpacity style={{ flex: 1 }}>
            <Text>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
            <Text>Forget Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;


