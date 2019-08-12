import React, { Fragment, Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

class Ledearboard extends Component {
  render() {
    return (
      <Fragment>
        {/* <View style={style.navbar}>
          <TouchableOpacity style={style.profilnavbar}>
            <Icon name="long-arrow-left" style={style.iconback} />
          </TouchableOpacity>
          <Text style={style.textLeader}>Ledearboard</Text>
        </View> */}
        <View style={style.body}>
          <View style={style.board}>
            <View
              style={{
                flexDirection: "row",
                marginTop: "13%",
                marginLeft: "6%"
              }}
            >
              <View style={{ width: 80, height: 80, flexDirection: "column" }}>
                <Text style={style.textrankpoin}>Rank</Text>
                <Text style={style.textrankpoin}>100</Text>
              </View>
              <View style={{ width: 80, height: 80 }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    overflow: "hidden"
                  }}
                  source={require("../Assets/img/1564481740.jpg")}
                />
              </View>
              <View style={{ width: 80, height: 80, flexDirection: "column" }}>
                <Text style={style.textrankpoin}>Points</Text>
                <Text style={style.textrankpoin}>100</Text>
              </View>
            </View>
            <Text style={style.textrankname}>Rizal Rohman</Text>
          </View>
          <View style={style.bodyboard}>
            <FlatList
              data={[{ key: "a" }, { key: "b" }]}
              renderItem=
              {({ item }) =>{
                return(
                  <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
                )
              }
                
              }
            />
          </View>
        </View>
      </Fragment>
    );
  }
}

export default Ledearboard;

