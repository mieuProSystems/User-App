import React, { Component } from 'react';
import {View, Text, Alert, Linking} from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';


const options={
  url:'http://www.google.com',
  message:'Download This App',
  title:'Download This App'
};


class SettingsScreen extends React.Component {

    shareToFriends = () => {
      Share.open(options)
          .then((res) => { console.log(res) })
          .catch((err) => { err && console.log(err); }); 
    }

    rateThisApp=()=>{
      Linking.openURL("market://details?id=com.google.android.apps.maps");
    }
    
    render() {
      
      return (
        <View>
          <TouchableOpacity>
              <View style={{ padding:5, backgroundColor:'#fff', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#eee', borderStyle:'solid'}}>
                <Icon style={{marginLeft:10, padding:10, marginTop:'auto', marginBottom:'auto'}} name='unlock' size={30} color="#00a2ff"/>
                <Text style={{fontSize:20, padding:10, marginTop:'auto', marginBottom:'auto'}}>Change Password</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View   style={{ padding:5, backgroundColor:'#ff', flexDirection:'row',borderBottomWidth:1, borderBottomColor:'#eee', borderStyle:'solid'}} >
              <Icon style={{marginLeft:10, padding:10, marginTop:'auto', marginBottom:'auto'}} name='question-circle' size={30} color="#00a2ff"/>
              <Text style={{marginLeft:1,fontSize:20, padding:10}} >Help & Feedback</Text>
            </View>
          </TouchableOpacity>
        
          <View>
            <TouchableHighlight  onPress={this.handleOnPress} >
              <View style={{ padding:5, backgroundColor:'#fff', flexDirection:'row',borderBottomWidth:1, borderBottomColor:'#eee', borderStyle:'solid'}} >
                <Icon style={{marginLeft:10, padding:10, marginTop:'auto', marginBottom:'auto'}} name='users' size={24} color="#00a2ff"/>
                <Text onPress={this.shareToFriends} style={{marginLeft:1,fontSize:20, padding:10, marginTop:'auto', marginBottom:'auto'}}>Invite Friends</Text>
              </View>
            </TouchableHighlight>
          </View>

          <TouchableHighlight>
            <View style={{ padding:5, backgroundColor:'#fff', flexDirection:'row',borderBottomWidth:1, borderBottomColor:'#eee', borderStyle:'solid'}}>
              <Icon style={{marginLeft:10, padding:10, marginTop:'auto', marginBottom:'auto'}} name='star' size={28} color="#00a2ff"/>
              <Text onPress={this.rateThisApp} style={{marginLeft:1,fontSize:20, padding:10, marginTop:'auto', marginBottom:'auto'}}>Rate This App</Text>
            </View>
          </TouchableHighlight>
            
          <TouchableHighlight>
            <View style={{ padding:5, backgroundColor:'#fff', flexDirection:'row',borderBottomWidth:1, borderBottomColor:'#eee', borderStyle:'solid', marginBottom:5}}>
              <Icon style={{marginLeft:10, padding:10, marginTop:'auto', marginBottom:'auto'}} name='info-circle' size={30} color="#00a2ff"/>  
              <Text style={{marginLeft:1,fontSize:20, padding:10, marginTop:'auto', marginBottom:'auto'}}>About Us</Text>
            </View>
          </TouchableHighlight>   
        </View>
      );
    }

  }

  export default SettingsScreen;