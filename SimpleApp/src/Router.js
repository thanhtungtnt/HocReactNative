// jshint ignore: start
import React, {Component} from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

import Home from './screens/Home.js';
import User from './screens/User.js';
import Detail from './screens/Detail.js';
import Menu from './screens/Menu.js';

export const HomeStack  = StackNavigator({
	ManHinh_Home: {
		screen: Home,
		navigationOptions: {
			title: 'Trang Chu'
		}
	},
	ManHinh_Detail: {
		screen: Detail,
		navigationOptions: {
			title: 'Chi Tiet'
		}
	}
});

export const UserStack = StackNavigator({
	ManHinh_User: {
		screen: User,
		navigationOptions: {
			title: 'Tai Khoan'
		}
	}
});

export const Tabbar = TabNavigator({
	Home: {
		screen: HomeStack,
		navigationOptions: {
			tabBarLabel: 'HOME'
		},
		

	},
	User: {
		screen: UserStack,
		navigationOptions: {
			tabBarLabel: 'USER'
		}
	}
},
{
	tabBarPosition: 'bottom',
	tabBarOptions: {
		style: {
			backgroundColor: 'darkgreen'
		},
		activeTintColor: 'yellow',
		activeBackgroundColor: '#cd2122',
		inactiveTintColor: '#cd2122',
		inactiveBackgroundColor: 'yellow',
		showLabel : true 
	},
	swipeEnabled : true
});

export const SideMenu = DrawerNavigator(
	{
		Tabbar: {
				screen: Tabbar
			}
		},
	{
		drawerWidth: 50, 
		drawerPosition: 'left',
		contentComponent: props => <Menu {...props} />
	}
);