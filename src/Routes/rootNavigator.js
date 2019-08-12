import React, { Component } from 'react';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Dashboard from '../Screen/Dashboard'
import Login from '../Screen/Login'
import Register from '../Screen/Register'
import Leaderboard from '../Screen/Leaderboard'
import Drawerdashboard from '../Components/DrawerDashboard'
const DashboardNavigator = createStackNavigator({
    Dashboard,
    Login,
    Register,
    Leaderboard
}, {
    initialRouteName: 'Leaderboard',
    headerMode: 'none'
})

const DrawerKuyMusik = createDrawerNavigator({
    Dashboard: DashboardNavigator
},{
    contentComponent: Drawerdashboard
})

export default createAppContainer(DrawerKuyMusik)