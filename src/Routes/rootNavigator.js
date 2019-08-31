import React, { Component } from "react";
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import Dashboard from "../Screen/Dashboard";
import Login from "../Screen/Login";
import Register from "../Screen/Register";
import Leaderboard from "../Screen/Leaderboard";
import Drawerdashboard from "../Components/DrawerDashboard";
import Loading from '../Screen/Auth'
// const AppStack = createStackNavigator({
  

// });
const AuthStack = createStackNavigator({  Login: Login });

const DashboardNavigator = createStackNavigator(
  {
    Dashboard: Dashboard,
  Register: Register,
  Leaderboard: Leaderboard,
  },
  {
    headerMode: "none"
  }
);

const DrawerKuyMusik = createDrawerNavigator(
  {
    DashboardNavigator
  },
  {
    contentComponent: Drawerdashboard
  }
);

export default createAppContainer(createSwitchNavigator(
    {
        Loading,
        DrawerKuyMusik,
        AuthStack,
      },
      {
        initialRouteName: 'DrawerKuyMusik',
        // navigationOptions:{ headerMode:'none'}
        headerMode:'none'
      }
      
));
