import React, { Component } from 'react';

import {View,Text, Image} from 'react-native';

import IPADDRESS from '../Components/serverip';

import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import { TouchableHighlight } from 'react-native-gesture-handler';




  class AccountScreen extends Component {
      constructor(props) {
          super(props);
          this.state = {token:false,
             data:false }
      }

      componentDidMount() {
          //console.log(this.props.navigation.state.params.token);
        //this.setState({token:this.props.navigation.state.params.token});

        //console.log(this.state.token);

        
        fetch(IPADDRESS+"/user/accountInformation",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({token:this.props.navigation.state.params.token})
        })
    .then((response) => (response.json()))
    .then(async(resultData)=>{
      
      await this.setState({data:resultData}) ;
      console.log(this.state.data);
      
    })
    .catch((error)=>{
        console.log(error);
    })

    
      }

      //style={{borderColor:'red', borderWidth:5, borderStyle:'solid' }}
      render() { 
          return ( <View style={{  }}>
          
          <View style={{flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap'}}>
              <View>
          <Image source={require('../Components/accountInformationIcon.jpg')} style={{tintColor:'#00a2ff',justifyContent:'flex-start',resizeMode:'contain',width:150, height:150}} />
          </View>
          
          {(this.state.data === false)?(<Text>Loading...!</Text>):(<View >
          
          <Text style={{fontSize:40, marginTop:'auto', marginBottom:'auto',}}>{this.state.data.username}</Text>
          </View>
          )}
          </View>

          <View>
          {(this.state.data === false)?null:(<View style={{padding:10}}>
                    <View style={{borderRadius:30, flexDirection:'row', backgroundColor:'#ccc', marginTop:10, marginBottom:10, padding:10, borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid'}} >
                    <View style={{width:140}}><Text style={{fontSize:20, color:'#000'}}>User-Id</Text></View>
                    <View><Text style={{fontSize:18}}>{this.state.data.userId}</Text></View>
                    </View>

                <View style={{borderRadius:30,flexDirection:'row', backgroundColor:'#ccc', marginBottom:10, padding:10, borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid'}} >
                <View style={{width:140}}><Text style={{fontSize:20, color:'#000'}}>E-mail</Text></View>
                <View style={{}}><Text style={{fontSize:18}}>{this.state.data.email}</Text></View>
                </View>
                
                <View style={{borderRadius:30,flexDirection:'row', backgroundColor:'#ccc', marginBottom:10, padding:10, borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid'}} >
                <View style={{width:140}}><Text style={{fontSize:20, color:'#000'}}>Password</Text></View>
                <View><Text style={{fontSize:18}}>********</Text></View>
                </View>

                <View style={{borderRadius:30,flexDirection:'row', backgroundColor:'#ccc', marginBottom:10, padding:10, borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid'}} >
                <View style={{width:140}}><Text style={{fontSize:20, color:'#000'}}>Joined At</Text></View>
                <View><Text style={{fontSize:18}}>{this.state.data.joinedAt}</Text></View>
                </View>

                <TouchableHighlight>
            <View style={{borderRadius:30, backgroundColor:'#002aff', width:150,marginLeft:'auto',marginRight:'auto', padding:10, borderColor:'#00a2ff', borderWidth:1, borderStyle:'solid'}}>
              <Text style={{fontSize:22, color:'#fff', marginLeft:'auto', marginRight:'auto'}}>Logout</Text>
            </View>
          </TouchableHighlight>

              </View>)}
          </View>


        
        </View>  );
      }
  }
   
  

  export default AccountScreen;