import React, { Component } from 'react';

import {View, Text} from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

class SettingsScreen extends React.Component {

    componentWillMount (){
        console.log(this.props.location);
    }
    
    render() {
      return (
        <View style={{ }}>
          <View style={{flexDirection:'row'}}>

          <TouchableHighlight>
            <View style={{borderRadius:15,width:150,  borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid', margin:20, backgroundColor:'#00a2ff', elevation:10}}>
              <Text style={{fontSize:20, padding:20, textAlign:'center', marginTop:'auto', marginBottom:'auto'}}>Change Password</Text>
            </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Home')}}>
          <View style={{borderRadius:15, width:150,  borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid', margin:20, backgroundColor:'#00a2ff', elevation:10}}>
              <Text style={{fontSize:20, padding:20, textAlign:'center'}}>Help & Feedback</Text>
            </View>
            </TouchableHighlight>
        </View>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight>
            <View style={{borderRadius:15,width:150,  borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid', margin:20, backgroundColor:'#00a2ff', elevation:10}}>
              <Text style={{fontSize:20, padding:20, textAlign:'center', marginTop:'auto', marginBottom:'auto'}}>Invite Friends</Text>
            </View>
            </TouchableHighlight>

            <TouchableHighlight>
            <View style={{borderRadius:15,width:150,  borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid', margin:20, backgroundColor:'#00a2ff', elevation:10}}>
              <Text style={{fontSize:20, padding:20, textAlign:'center', marginTop:'auto', marginBottom:'auto'}}>Rate This App</Text>
            </View>
            </TouchableHighlight>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableHighlight>
            <View style={{borderRadius:15,width:150,  borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid', margin:20, backgroundColor:'#00a2ff', elevation:10}}>
              <Text style={{fontSize:20, padding:20, textAlign:'center', marginTop:'auto', marginBottom:'auto'}}>About Us</Text>
            </View>
            </TouchableHighlight>

            <TouchableHighlight>
            <View style={{borderRadius:15,width:150,  borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid', margin:20, backgroundColor:'#00a2ff', elevation:10}}>
              <Text style={{fontSize:20, padding:20, textAlign:'center', marginTop:'auto', marginBottom:'auto'}}>App Info</Text>
            </View>
            </TouchableHighlight>
            </View>
        </View>
      );
    }

  }

  export default SettingsScreen;