import React, { Component, Fragment } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

class DrawerDashboard extends Component {
  render() {
    return (
      <Fragment>
        <View style={style.profile}>
          <Image
            style={style.image}
            source={require("../Assets/img/1564481740.jpg")}
          />
          <Text style={style.name}>Rizal Rohman</Text>
        </View>
        <View>
            <TouchableOpacity style={style.menudrawer} onPress={() => this.props.navigation.navigate('Leaderboard')}>
            <Image
            style={style.icondrawer}
            source={require("../Assets/img/crown.png")}
          />
                <Text numberOfLines={1} style={style.textMenu}>
                    Leaderboards
                </Text>
            </TouchableOpacity>
        </View>
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
  }
});
