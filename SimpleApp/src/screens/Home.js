/*jshint esversion: 6 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Home extends Component{
	static navigationOptions = {
		title: 'Trang chu'
	}

	render(){
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#fff'}}>
				<Text> Home </Text>
				<Text>Hello Tung Pham</Text>
				<TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_Detail', {hoten:'Pham Thanh Tung'}) }} style={{backgroundColor:'green'}}>
					<Text style={{color:'#fff', padding:10}}>Go To Detail</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { this.props.navigation.navigate('DrawerOpen', {hoten:'Pham Thanh Tung'}) }} style={{backgroundColor:'red', marginTop: 20}}>
					<Text style={{color:'#fff', padding:10}}>Show Menu</Text>
				</TouchableOpacity>
			</View>
			);
	}
}