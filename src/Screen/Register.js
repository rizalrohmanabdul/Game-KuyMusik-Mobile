import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
import ImagePicker from "react-native-image-picker";
import { registerUser } from "../Public/redux/actions/users";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ImageSource: null,
      spinner: false
    };
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response };
        this.setState({
          ImageSource: source
        });
      }
    });
  }
  render() {
    const registrasiAdd = () => {
      this.setState({
        spinner: true
      });
      const dataFile = new FormData();
      dataFile.append("username", this.state.username);
      dataFile.append("password", this.state.password);
      dataFile.append("full_name", this.state.full_name);
      dataFile.append("img_profile", {
        name: this.state.ImageSource.uri.fileName,
        type: this.state.ImageSource.uri.type || null,
        uri: this.state.ImageSource.uri.uri
      });
      add(dataFile);
    };
    let add = async data => {
      await this.props
        .dispatch(registerUser(data))
        .then(() => {
          this.setState({
            spinner: false
          });
          alert("Success !!!");
          this.props.navigation.navigate('Login');
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
          <Text style={style.textlogin}> SIGN UP </Text>
          <Text style={style.textKuy}>Kuy Musik</Text>
          <Text style={style.textJos}>Jos Jos Aye Aye</Text>
          <Text style={style.textGame}>Game</Text>
        </View>
        <Spinner
        // visible={true}
          visible={this.state.spinner}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        <ScrollView>
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
            <TextInput
              style={style.textInput}
              placeholder="Full Name"
              onChangeText={full_name =>
                this.setState({ full_name: full_name })
              }
            />
            {this.state.ImageSource === null ? (
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <View
                  style={{
                    minHeight: 100,
                    width: "100%",
                    paddingTop: 10
                  }}
                >
                  <Image
                    style={{
                      width: "35%",
                      height: 70,
                      backgroundColor: "green"
                    }}
                    source={require("../Assets/img/1564481740.jpg")}
                  />
                  <Text style={style.textPlease}>Upload your photos here</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <View
                  style={{
                    minHeight: 100,
                    width: "100%",
                    paddingTop: 10
                  }}
                >
                  <Image
                    style={{
                      width: "35%",
                      height: 70,
                      backgroundColor: "green"
                    }}
                    source={this.state.ImageSource.uri}
                  />
                  <Text style={style.textPlease}>Upload your photos here</Text>
                </View>
              </TouchableOpacity>
            )}

            <Button
              color="#20a8e0"
              title="Sign Up"
              onPress={registrasiAdd.bind(this)}
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </ScrollView>
        <View style={style.footer}>
          <TouchableOpacity style={{ flex: 1 }}>
            <Text>You have an account yet?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
            <Text>Sign in</Text>
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

export default connect(mapStateToProps)(Register);

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column"
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
    marginTop: "10%",
    marginLeft: "39%",
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
