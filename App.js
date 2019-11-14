
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';



import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import PlayVideo from './Screen/playVideo';
import ChannelVideos from './Screen/channelVideos';
import tabNavigationContainer from './Screen/homePage';
import Dashboard from './Screen/dashboard';
import Login from './Screen/login';
import RegisterEmail from './Screen/registerEmail';
import RegisterUsername from './Screen/registerUsername';
import RegisterPassword from './Screen/registerPassword';
  

import ForgetPassword from './Screen/forgetPassword';



const AppNavigator = createStackNavigator(  
  {  
    Dashboard :{
      screen:Dashboard,
      navigationOptions :{
          header:null
      }
  },
  Login :{
      screen:Login,  
  },
  RegisterEmail :{
    screen:RegisterEmail},
  
  RegisterUsername :{
      screen:RegisterUsername,
  },
  RegisterPassword :{
      screen:RegisterPassword
  },
  ForgetPassword :{
      screen:ForgetPassword,
      navigationOptions:{
          title:'ForgetPassword',
          headerStyle: {  
            backgroundColor: '#00a2ff',
              },  
        headerTitleStyle: {   
            fontSize:24,
            color:'#000'
          
        },  
   
      }
  },
  Home:{ screen:tabNavigationContainer
    },

  ChannelVideos:{screen:ChannelVideos
    },

  playVideo:{
      screen:PlayVideo
    }
  },

  {  
      initialRouteName: "Dashboard"  
  }  
);  


const AppContainer = createAppContainer(AppNavigator);  
class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  

export default App;