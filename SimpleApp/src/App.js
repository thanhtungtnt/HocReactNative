/*jshint esversion: 6 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SideMenu} from './Router.js';

export default class App extends Component{
	render(){
		return (
			<SideMenu />
		);
	}
}