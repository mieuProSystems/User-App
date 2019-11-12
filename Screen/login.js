import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    AsyncStorage,
    Keyboard,
    TextInput,
    TouchableHighlight,
    Switch,
    ImageBackground, Button
} from 'react-native';
import { styles } from '../stylesheets/loginStyles';

import { StackActions, NavigationActions } from 'react-navigation';


import Spinner from "react-native-loading-spinner-overlay";
import IpAddress from '../Components/serverip';


export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '',
            showPassword: true,
            spinner:false,
        }
    }

// componentWillMount(){
//     this.requestLocationPermission()
// }
//      requestLocationPermission=()=> 
// {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         'title': 'Example App',
//         'message': 'Example App access to your location '
//       }
//     )
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("You can use the location")
//       alert("You can use the location");
//     } else {
//       console.log("location permission denied")
//       alert("Location permission denied");
//     }
//   } catch (err) {
//     console.warn(err)
//   }
// }

    validateLogin =async()=>{
        console.log("clicked");
        if( (this.state.email.length === 0) || (this.state.password.length === 0) ){
            alert("Please Enter the Login details");
        }
        else{
            this.setState({spinner: true})
            fetch(IpAddress+'/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": this.state.email,
                    "password": this.state.password,
                })
            })
                .then((response) => (response.json()))
                .then((responsejson) => {
                    //alert(JSON.stringify(responsejson));
                    this.setState({spinner: false});
                    if ( (responsejson.status) === 0 ) {
                        alert("Invalid Username");
                    } else if( (responsejson.status) === 1 ) {
                        alert("Incorrect Password");
                    }
                    else if((responsejson.status)=== 3){
                        alert("User Mail Not yet Verified! Please Verify Your Mail");
                    }
                    else{
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            key: null,
                            actions: [NavigationActions.navigate({ routeName: 'Home', params: { token: responsejson['token'] } })],
                        }));
                    }

                })
                .catch((error) => {
                        this.setState({spinner: false});
                        alert(error);
                    }
                )
        }
    };

    toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    static navigationOptions = {  
        title: 'Login',  
        headerStyle: {  
            backgroundColor: '#00a2ff',
              },  
        headerTitleStyle: {   
            fontSize:24,
            color:'#000'
          
        },  
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
                <View style={styles.container}>

                    <View style={{marginTop:50, width:'90%', padding:10}}>
                    <Spinner
                        visible={this.state.spinner}
                        //textContent={'Loading...'}
                        //textStyle={styles.spinnerTextStyle}
                    />
                    <TextInput style={styles.inputBox}
                               onChangeText={(email) => this.setState({email})}
                               underlineColorAndroid='rgba(0,0,0,0)'
                               placeholder="Email"
                               placeholderTextColor = "#000"
                               selectionColor="#fff"
                               maxLength = {256}
                               keyboardType="email-address"
                               onSubmitEditing={()=> this.password.focus()}/>

                    <TextInput style={styles.inputBox}
                               onChangeText={(password) => this.setState({password})}
                               underlineColorAndroid='rgba(0,0,0,0)'
                               placeholder="Password"
                               secureTextEntry={this.state.showPassword}
                               placeholderTextColor = "#000"
                               maxLength = {15}
                               ref={(input) => this.password = input}/>
                    <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
                    <Switch
                        onValueChange={this.toggleSwitch}
                        value={!this.state.showPassword}
                    />
                    <Text style={{fontWeight:'bold', fontSize:14}}>Show Password</Text>
                    </View>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.validateLogin}> Login </Text>
                    </TouchableHighlight>
                    <Text style={styles.text} onPress={() => navigate('ForgetPassword', {name: 'forgetpassword'})}> Forget Password?</Text>
                    
                    </View>
                </View>
        )
    }
}
