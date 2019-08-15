import React, { Component, Fragment } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import isEmpty from "lodash.isempty";

class DrawerDashboard extends Component {
  constructor() {
    super();
    this.state = {
      id: ""
    };
    AsyncStorage.getItem("id", (error, result) => {
      if (result) {
        this.setState({
          id: result
        });
      }
    });
  }
  logout = () => {
    AsyncStorage.removeItem("id", error => {
      if (error) {
        alert(error);
      } else {
        alert("Success !!!");
        this.props.navigation.navigate("Dashboard");
      }
    });
  };

  logoutHandler = () => {
    Alert.alert(
      "Logout",
      "Are you sure ?",
      [
        {
          text: "NO",
          onPress: () => {}
        },
        {
          text: "YES",
          onPress: () => {
            this.logout();
          }
        }
      ],
      { cancelable: false }
    );
  };
  render() {
    return (
      <Fragment>
        {!isEmpty(this.state.id) ? (
          <Fragment>
            <View style={style.profile}>
              <Image
                style={style.image}
                source={require("../Assets/img/1564481740.jpg")}
              />
              <Text style={style.name}>Rizal Rohman</Text>
            </View>
            <View>
              <TouchableOpacity
                style={style.menudrawer}
                onPress={() => this.props.navigation.navigate("Leaderboard")}
              >
                <Image
                  style={style.icondrawer}
                  source={require("../Assets/img/crown.png")}
                />
                <Text numberOfLines={1} style={style.textMenu}>
                  Leaderboards
                </Text>
              </TouchableOpacity>
            </View>
            <View style={style.footerdrawer}>
              <TouchableOpacity style={{ flex: 1 }}>
                <Text style={{ color: "#9f9fa1", fontSize: 11 }}>
                  V 1.0 Rizal Rohman
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={this.logoutHandler}
              style={{
                flex: 1,
                position: "absolute",
                marginTop: "204%",
                padding: "1%",
                marginLeft: "87%"
              }}
            >
              <Icon name="sign-out" style={{ fontSize: 32, color: "#000" }} />
            </TouchableOpacity>
          </Fragment>
        ) : (
          <Fragment>
            <View style={style.profile}>
              <Image
                style={style.image}
                source={require("../Assets/img/1564481740.jpg")}
              />
              <Text style={style.name}>Guest</Text>
            </View>
            <View>
              <TouchableOpacity
                style={style.menudrawer}
                onPress={() => { 
                  alert('please login')
                  this.props.navigation.navigate("Login")}
                } 
              >
                <Image
                  style={style.icondrawer}
                  source={require("../Assets/img/crown.png")}
                />
                <Text numberOfLines={1} style={style.textMenu}>
                  Leaderboards
                </Text>
              </TouchableOpacity>
            </View>
            <View style={style.footerdrawer}>
              <TouchableOpacity style={{ flex: 1 }}>
                <Text style={{ color: "#9f9fa1", fontSize: 11 }}>
                  V 1.0 Rizal Rohman
                </Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}
      </Fragment>
    );
  }
}
export default DrawerDashboard;

const style = StyleSheet.create({
  profile: {
    alignItems: "center",
    margin: 15
  },
  image: {
    width: 95,
    height: 96,
    borderRadius: 54
  },
  name: {
    fontSize: 17,
    marginTop: 10,
    fontWeight: "bold",
    color: "#000000"
  },
  menudrawer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%"
  },
  textMenu: {
    margin: 10,
    fontWeight: "bold",
    color: "#000",
    fontSize: 15,
    marginLeft: "13%"
  },
  icondrawer: {
    width: 32,
    height: 32,
    position: "absolute"
  },
  footerdrawer: {
    flex: 1,
    flexDirection: "row",
    marginTop: "135%",
    padding: "1%"
  }
});
