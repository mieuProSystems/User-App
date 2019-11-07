import React, { Component } from 'react';

import {View, Text} from 'react-native';

class SettingsScreen extends React.Component {

    componentWillMount (){
        console.log(this.props.location);
    }
    
    render() {
      return (
        <View style={{ }}>
          <View style={{flexDirection:'row'}}>
          <View style={{borderRadius:15, width:150,  borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid', margin:20, backgroundColor:'#00a2ff', elevation:20}}>
              <Text style={{fontSize:20, padding:20, textAlign:'center'}}>Send Feedback</Text>
            </View>
            <View style={{borderRadius:15,width:150,  borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid', margin:20, backgroundColor:'#00a2ff', elevation:20}}>
              <Text style={{fontSize:20, padding:20, textAlign:'center', marginTop:'auto', marginBottom:'auto'}}>Invite Friends</Text>
            </View>
            </View>
        </View>
      );
    }

  }

  export default SettingsScreen;