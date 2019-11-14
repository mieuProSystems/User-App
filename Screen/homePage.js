import React, { Component } from 'react';
import {ScrollView, View, Text, BackHandler, Alert} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import SettingsScreen from './settingsScreen';
import AccountScreen from './AccountScreen';

import IPADDRESS from '../Components/serverip';
import ChannelList from '../Components/channelList';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
                data:'false'
                }
  }  

  componentDidMount(){
    // Fetching Channels and Videos from Database
    fetch(IPADDRESS+"/home/getVideos")
    .then(response=>response.json())
    .then(async(resultData)=>{
      
      await this.setState({data:resultData}) ;
      
    })
    // Back Button Listener
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
  
  }
  
// Back Button Actions
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

//Remove Back button event Listener
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
                      {/* Passing Channel Content to the Channel List Component */}
                      <ChannelList 
                          index={index} 
                          redirect={  (channelName, videoIds, videoTitles, videoThumbnails) =>  {
                                      this.props.navigation.navigate('ChannelVideos',{channelName:channelName, videoIds:videoIds, videoTitles:videoTitles, videoThumbnails:videoThumbnails});
                                    }}
                          name={data['channelName']} 
                          videoIds={data['videoIds']} 
                          videoTitles={data['videoTitles']} 
                          videoThumbnails={data['videoThumbnails']}
                      />
                  </View>
                  );
                });
              }
    
          
          return ( 
            <ScrollView>
                    <View style={{borderColor:'#000', borderWidth:1, margin:10, backgroundColor:'white'}}>
                        <Text style={{textAlign:'center', padding:5, color:'#000', backgroundColor:'#00a2ff', fontSize:24}}>Your Channels</Text>
                        <View>  
                          {imgView}
                        </View>
                    </View>        
            </ScrollView>
             );
            }
          }


//Bottom Tab Navigation
const TabNavigator = createBottomTabNavigator({
  Home:{  
        screen:Home,  
        navigationOptions:{  
                            tabBarLabel:'Home',  
                            tabBarIcon:({focused,tintColor})=>(  
                                          <Entypo name="home" size={30} color="#00a2ff" focused={focused} tintColor={{ tintColor }}/>
                                          ),
                            tabBarOptions: {
                                              labelStyle: {
                                                fontSize: 14,
                                                margin: 0,
                                                padding: 5,
                                              },
        
                                              style: {
                                                height: 70
                                              },

                                              activeTintColor:'#00a2ff',
                                              activeBackgroundColor:'#ddd'
        
                                            }      
                          }
        },

  Account:{
          screen:AccountScreen,  
          navigationOptions:{  
                              tabBarLabel:'My Profile',  
                              tabBarIcon:({focused,tintColor})=>(  
                                <Entypo name="user" size={30} focused={focused} color="#00a2ff" />
                              ),
                              tabBarOptions: {
                                              labelStyle: {
                                                fontSize: 14,
                                                margin: 0,
                                                padding: 5,
                                              },
        
                                              style: {
                                                height: 70
                                              },

                                              activeTintColor:'#00a2ff',
                                              activeBackgroundColor:'#ddd'
                                              }  
                            }  
          },

  Settings:{  
            screen:SettingsScreen,  
            navigationOptions:{  
                                tabBarLabel:'Settings',  
                                tabBarIcon:({focused,tintColor})=>(  
                                  <Entypo name="tools" focused={focused} size={30} color="#00a2ff" />
                                ),
                                tabBarOptions: {
                                                labelStyle: {
                                                  fontSize: 14,
                                                  margin: 0,
                                                  padding: 5,
                                                },
        
                                                style: {
                                                  height: 70
                                                },
                                                activeTintColor:'#00a2ff',
                                                activeBackgroundColor:'#ddd'
                                              } 
                              },
          tabBarOptions: { 
              showIcon: true 
          },  
      },

    });

const tabNavigationContainer = createAppContainer(TabNavigator);

export default tabNavigationContainer ;