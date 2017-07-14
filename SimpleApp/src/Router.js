/*jshint esversion: 6 */
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import Home from './screens/Home.js';
import User from './screens/User.js';
import Detail from './screens/Detail.js';
import Menu from './screens/Menu.js';

export const HomeStack  = StackNavigator({
	ManHinh_Home: {
		screen: Home
	},
	ManHinh_Detail: {
		screen: Detail
	}
});