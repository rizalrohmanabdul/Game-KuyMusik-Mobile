import React, { Component } from "react";
import { Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export default class Auth extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
      }
    
      
      _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
      };
    
  render() {
    return (
      <View>
        <Spinner
          // visible={true}
          visible={this.state.spinner}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
      </View>
    );
  }
}
