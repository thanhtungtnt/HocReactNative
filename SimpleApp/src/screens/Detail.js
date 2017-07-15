/*jshint esversion: 6 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Detail extends Component{
	// static navigationOptions = {
	// 	title: 'Chi Tiet'
	// }

	render(){
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Detail</Text>
				<TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={{backgroundColor:'green'}}>
					<Text style={{color:'#fff', padding:10}}>Back</Text>
				</TouchableOpacity>
				<Text>{ this.props.navigation.state.params.hoten }</Text>
			</View>
			);
	}
}