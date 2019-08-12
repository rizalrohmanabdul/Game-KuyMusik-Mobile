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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ImageSource: null
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
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          ImageSource: source
        });
      }
    });
  }
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
          <Text style={style.textlogin}> SIGN UP </Text>
          <Text style={style.textKuy}>Kuy Musik</Text>
          <Text style={style.textJos}>Jos Jos Aye Aye</Text>
          <Text style={style.textGame}>Game</Text>
        </View>
        <ScrollView>
          <View style={style.formLogin}>
            <TextInput style={style.textInput} placeholder="Username" />
            <TextInput style={style.textInput} placeholder="Password" />
            <TextInput style={style.textInput} placeholder="Full Name" />
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
                    source={require("../Assets/img/1564481740.jpg")}
                  />
                  <Text style={style.textPlease}>Upload your photos here</Text>
                </View>
              </TouchableOpacity>
            )}

            <Button
              color="#20a8e0"
              title="Sign Up"
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

export default Login;


