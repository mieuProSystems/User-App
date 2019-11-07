import React, { Component } from 'react';
import {ScrollView, View, Text, BackHandler, Alert} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SettingsScreen from './settingsScreen';
import AccountScreen from './AccountScreen';

import IPADDRESS from '../Components/serverip';

import ChannelList from '../Components/channelList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {data:'false'}
  }  

  componentDidMount(){
    fetch(IPADDRESS+"/home/getVideos")
    .then(response=>response.json())
    .then(async(resultData)=>{
      
      await this.setState({data:resultData}) ;
      
    })
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);

  }
  
  

backPressed = () => {

  Alert.alert(
    'Logout & Exit App',
    'Do you want to logout & exit?',
    [
      {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Yes', onPress: () => BackHandler.exitApp()},
    ],
    { cancelable: false });
    return true;
}


componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
}

  render() { 
          var imgView =[];
          if(this.state.data ==='false'){
              imgView.push(<View><Text>Loading...</Text></View>)
          }
          else{
              this.state.data.map((data, index)=>{
                  
                  imgView.push(
                      <View >
                          <ChannelList index={index} redirect={(channelName, videoIds, videoTitles, videoThumbnails)=>{this.props.navigation.navigate('ChannelVideos',{channelName:channelName, videoIds:videoIds, videoTitles:videoTitles, videoThumbnails:videoThumbnails});}}
   name={data['channelName']} videoIds={data['videoIds']} videoTitles={data['videoTitles']} videoThumbnails={data['videoThumbnails']}/>
                      </View>);

        });
    }
    return ( 
            <ScrollView>
    
                    <View style={{borderColor:'#000', borderWidth:1, margin:10, backgroundColor:'white'}}>
                        <Text style={{textAlign:'center', padding:5, color:'#000', backgroundColor:'#00a2ff', fontSize:24}}>Your Channels</Text>
                         <View style={{}}>  
                          {imgView}
                          </View>

                        
  
                    </View>
                    
            </ScrollView> );
  }
}


// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });
// const AccountStack = createStackNavigator({
//   Account: AccountScreen,
// });




const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Account:AccountScreen,
  Settings: SettingsScreen,
});

const tabNavigationContainer = createAppContainer(TabNavigator);

export default tabNavigationContainer ;