/* jshint ignore:start */ 
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View, Text, TouchableOpacity
} from 'react-native';

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	ketqua:'',
	  	so1:0,
	  	pheptinh: ''
	  };
	}//end contructor

	clickMe(n){
		this.setState({
			ketqua: this.state.ketqua + n
		})
	}//end cickme

	clickPhepTinh(tinh){
		this.setState({
			pheptinh: tinh,
			so1: this.state.ketqua,
			ketqua: ''
		});
	}//end clickPhepTinh

	tinhtoan(){
		if(this.state.pheptinh === '+'){
			this.setState({
				ketqua: +this.state.so1 + +this.state.ketqua,
				pheptinh: ''
			})
		}
		if(this.state.pheptinh === '-'){
			this.setState({
				ketqua: +this.state.so1 - +this.state.ketqua,
				pheptinh: ''
			})
		}
		if(this.state.pheptinh === 'x'){
			this.setState({
				ketqua: +this.state.so1 * +this.state.ketqua,
				pheptinh: ''
			})
		}
		if(this.state.pheptinh === '/'){
			this.setState({
				ketqua: +this.state.so1 / +this.state.ketqua,
				pheptinh: ''
			})
		}
	}//end tinhtoan

	reset(){
		this.setState({
			ketqua: '',
			pheptinh: '',
			so1: 0
		})
	}//end reset

	render() {
		return (
			<View style={ao.aokhoac}>
					<View style={ao.hang1}>
						<Text style={ao.ketquaStyle}>{this.state.ketqua}</Text>
					</View>
					<View style={ao.hang2}>
						<TouchableOpacity 
							onPress={()=>{this.reset(7)}}
							style={ao.nutbac}>
							<Text style={ao.text}>C</Text>
						</TouchableOpacity>
						<TouchableOpacity style={ao.nutbac}>
							<Text style={ao.text}>%</Text>
						</TouchableOpacity>
						<TouchableOpacity style={ao.nutbac}>
							<Text style={ao.text}>+/-</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickPhepTinh('/')}}
							style={ao.nutvang}>
							<Text style={ao.text}>/</Text>
						</TouchableOpacity>
					</View>
					<View style={ao.hang2}>
						<TouchableOpacity 
							onPress={()=>{this.clickMe(7)}}
							style={ao.nutbac}>
							<Text style={ao.text}>7</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickMe(8)}}
							style={ao.nutbac}>
							<Text style={ao.text}>8</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickMe(9)}}
							style={ao.nutbac}>
							<Text style={ao.text}>9</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickPhepTinh('x')}}
							style={ao.nutvang}>
							<Text style={ao.text}>x</Text>
						</TouchableOpacity>
					</View>
					<View style={ao.hang2}>
						<TouchableOpacity 
							onPress={()=>{this.clickMe(4)}}
							style={ao.nutbac}>
							<Text style={ao.text}>4</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickMe(5)}}
							style={ao.nutbac}>
							<Text style={ao.text}>5</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickMe(6)}}
							style={ao.nutbac}>
							<Text style={ao.text}>6</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickPhepTinh('-')}}
							style={ao.nutvang}>
							<Text style={ao.text}>-</Text>
						</TouchableOpacity>
					</View>
					<View style={ao.hang2}>
						<TouchableOpacity 
							onPress={()=>{this.clickMe(1)}}
							style={ao.nutbac}>
							<Text style={ao.text}>1</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickMe(2)}}
							style={ao.nutbac}>
							<Text style={ao.text}>2</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickMe(3)}}
							style={ao.nutbac}>
							<Text style={ao.text}>3</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.clickPhepTinh('+')}}
							style={ao.nutvang}>
							<Text style={ao.text}>+</Text>
						</TouchableOpacity>
					</View>
					<View style={ao.hang2}>

						<TouchableOpacity 
							onPress={()=>{this.clickMe(0)}}
							style={ao.nutbac2}>
							<Text style={ao.text}>0</Text>
						</TouchableOpacity>
						<TouchableOpacity style={ao.nutbac}>
							<Text style={ao.text}>.</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={()=>{this.tinhtoan()}}
							style={ao.nutvang}>
							<Text style={ao.text}>=</Text>
						</TouchableOpacity>
					</View>
			</View>
		);
	}//end render
}

const styles = StyleSheet.create({

});
export default App;

var ao = StyleSheet.create({
  aokhoac:{
  	backgroundColor: 'yellow',
  	flex: 1,
  	flexDirection: 'column'
  } ,
  hang1:{
  	backgroundColor: 'black',
  	flex: 2,	
  	justifyContent: 'flex-end',
  	alignItems: 'flex-end',
  },
  hang2:{
  	backgroundColor:'#ddd',
  	flex: 1,
  	borderBottomWidth: 1,
  	borderBottomColor: '#aaa',
  	flexDirection: 'row'
  },
  		nutbac: {
  			borderRightWidth: 1,
  			borderRightColor: '#aaa',	
  			flex:1,
  			alignItems: 'center',
  			justifyContent: 'center'
  		},
  		nutbac2:{
  			borderRightWidth: 1,
  			borderRightColor: '#aaa',	
  			flex:2,
  			alignItems: 'center',
  			justifyContent: 'center'
  		},
  		nutvang:{
  			backgroundColor: 'orange',
  			flex:1,
  			alignItems: 'center',
  			justifyContent: 'center'
  		},
  			text:{
  				fontSize: 30
  			},
  			ketquaStyle: {
  				fontSize: 40,
  				color: '#fff'
  			}

});