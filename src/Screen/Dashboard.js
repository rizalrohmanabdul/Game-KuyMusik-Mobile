import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';

Clik = () => {
    alert('yey ye josd')
}

class Dashboard extends Component {
    render() {
        return (
            <View style={style.body}>
                <View style={style.navbar}>
                    <TouchableOpacity style={style.profilnavbar} onPress={()=>this.props.navigation.openDrawer()}>
                        <Image
                            style={{ width: 32, height: 32, borderRadius: 100, overflow: "hidden" }}
                            source={require('../Assets/img/1564481740.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.scornavbar}  onPress={() => this.props.navigation.navigate('Leaderboard')}>
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../Assets/img/crown.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={style.text}>Combo Hit : 5</Text>
                <Text style={style.text2}>Kuy Musik</Text>
                <Text style={style.text3}>Jos Jos Aye Aye</Text>
                <TouchableOpacity>
                   <View style={style.ellipse}/>
                   <View style={style.ellipse1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Clik}>
                   <View style={style.ellipse2}/>
                   <View style={style.ellipse3} />
                </TouchableOpacity>
                <TouchableOpacity>
                   <View style={style.ellipse4}/>
                   <View style={style.ellipse5} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Clik}>
                   <View style={style.ellipse6}/>
                   <View style={style.ellipse7} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default Dashboard
