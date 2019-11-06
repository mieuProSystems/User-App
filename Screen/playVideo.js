
import YouTubePlayer from "react-native-youtube-sdk";

import React, {Component} from 'react';

import {
    View,
    Text,
    ScrollView
  } from 'react-native';


class PlayVideo extends Component {
    static navigationOptions = ({ navigation }) => {  
      return ({ 
          title: navigation.getParam('channelName', 'Videos'),   
        headerStyle: {  
            backgroundColor: '#00a2ff',
              },  
        headerTitleStyle: {  
            fontWeight: 'bold', 
            fontSize:24,
            color:'#000',
            textAlign:'center' },
        });   
      }
      
    render() { 
      const { navigation } = this.props;
  
      const videoId= navigation.getParam("videoId",'null');
      const videoTitle= navigation.getParam("videoTitle",'null');
      
      return ( <View >
                <View style={{elevation:5, backgroundColor:'white', margin:10}}>
                    <YouTubePlayer
                        ref={ref => (this.youTubePlayer = ref)}
                        videoId={videoId}
                        autoPlay={true}
                        fullscreen={false}
                        showFullScreenButton={true}
                        showSeekBar={true}
                        showPlayPauseButton={true}
                        startTime={5}
                        style={{ height: 200, margin:10 }}
                        onReady={e => console.log("onReady", e.type)}
                        onError={e => console.log("onError", e.error)}
                        onChangeState={e => console.log("onChangeState", e.state)}
                        onChangeFullscreen={e => console.log("onChangeFullscreen", e.isFullscreen)}
                      />
  
                    <View style={{margin:10}}>
                        <Text style={{fontSize:16, color:'#2c3e50'}}>{videoTitle}</Text>
                    </View>
                    </View>
                    
              </View>);
    }
  }


  export default PlayVideo;