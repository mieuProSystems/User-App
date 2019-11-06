
import React, {Component} from 'react';

import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableHighlight
  } from 'react-native';

class ChannelVideos extends Component {  

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
            textAlign:'center',
        }
        });   
      }
    
      render() { 
        const { navigation } = this.props; 
        console.log(this.props);
        const channelName = navigation.getParam('channelName', null);
        const videoIds = navigation.getParam('videoIds', null);
        const videoTitles = navigation.getParam('videoTitles',null);
        const videoThumbnails = navigation.getParam('videoThumbnails', null); 
    
    
        var channelContentsDisplay =[];
    
        videoThumbnails.map((data, index)=>{
                      
          channelContentsDisplay.push(
              <View>
                  <TouchableHighlight onPress={()=>{console.log(videoIds[index]); this.props.navigation.navigate("playVideo",{videoId:videoIds[index], videoTitle:videoTitles[index],channelName:channelName});}}>
                        <View style={{flex: 1, flexDirection: 'row', flexWrap:'wrap', marginTop:5, marginLeft:10, marginRight:10, elevation:15, backgroundColor:'white'}}>
                          <Image style={{width: 200, height: 130, margin:3}} source={{uri:data}}/>
                              <View style={{flexDirection:'row', flex: 1, flexWrap: 'wrap'}}>
                                  <Text style={{fontSize:16}}>{videoTitles[index]}</Text>
                              </View> 
                        </View>
                  </TouchableHighlight>
              </View>);
      });
      return (  
              <ScrollView>  
                  {channelContentsDisplay}
              </ScrollView>);  
          }  
      }
    

export default ChannelVideos;