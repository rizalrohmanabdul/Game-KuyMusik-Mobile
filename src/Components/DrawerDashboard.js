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
            <TouchableOpacity style={style.menudrawer}>
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


