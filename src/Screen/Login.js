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
import { loginUser } from "../Public/redux/actions/users";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinner: false
    };
  }
  render() {
    const loginAdd = () => {
      this.setState({
        spinner: true
      });
      const dataFile = {
        "username": this.state.username,
        "password": this.state.password
      } 
      add(dataFile);
    };
    let add = async data => {
      await this.props
        .dispatch(loginUser(data))
        .then(() => {
          this.setState({
            spinner: false
          });
          alert("Success !!!");
          
          this.props.navigation.navigate('Dashboard');
        })
        .catch(err => {
          this.setState({
            spinner: false
          });
          alert("Gagal " + err);
        });
    };
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
        <Spinner
          visible={this.state.spinner}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        <View style={style.formLogin}>
        <TextInput
              style={style.textInput}
              placeholder="Username"
              onChangeText={username => this.setState({ username: username })}
            />
            <TextInput
              style={style.textInput}
              placeholder="Password"
              onChangeText={password => this.setState({ password: password })}
            />
          <Button
            color="#20a8e0"
            title="Sign In"
            onPress={loginAdd.bind(this)}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={style.footer}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate("Register")}>
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

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Login);

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white"
  },
  textlogin: {
    position: "absolute",
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    marginTop: "9%",
    marginLeft: "3%"
  },
  textKuy: {
    marginTop: "19%",
    marginLeft: "50%",
    color: "#f79237",
    position: "absolute",
    fontSize: 38,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  textJos: {
    marginTop: "30%",
    marginLeft: "64%",
    color: "#f79237",
    position: "absolute",
    fontSize: 14
  },
  textGame: {
    marginTop: "20%",
    marginLeft: "58%",
    color: "#f79237",
    position: "absolute",
    fontSize: 14
  },
  textPlease: {
    marginTop: "55%",
    margin: "25%",
    color: "#f79237",
    position: "absolute",
    fontSize: 14
  },
  formLogin: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: "10%"
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 24,
    marginBottom: "5%",
    padding: 10
  },
  footer: {
    flexDirection: "row",
    margin: "3%"
  }
});
