import React, { Component } from 'react';

import {View, TouchableHighlight, Text} from 'react-native';

class ChannelList extends Component {
    constructor(props) {
      super(props);
      this.state={
        show:false
      }
      
    }
    showVideoThumbnails = (channelName, videoIds, videoTitles, videoThumbnails)=>{ 
      this.props.redirect(channelName, videoIds, videoTitles, videoThumbnails);  
    }
    render() { 
      return (<View><TouchableHighlight onPress={()=>{this.setState({show:true});}}>
                    <View key={this.props.index+1} style={{backgroundColor:'#fff', padding:10, margin:5, elevation:5}}>
                        <Text style={{color:'#000', fontSize:20, textAlign:'left'}} >
                            {this.props.index+1}. {this.props.name} 
                        </Text>
                    </View>
                    </TouchableHighlight>
                    {(this.state.show)?(<View>{this.showVideoThumbnails(this.props.name, this.props.videoIds, this.props.videoTitles, this.props.videoThumbnails)}</View>):null}
                </View>
  
   );
    }
  }

  export default ChannelList;