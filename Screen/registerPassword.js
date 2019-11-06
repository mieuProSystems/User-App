import React, { Component } from 'react';
import {Switch, Text, TextInput, TouchableHighlight, View} from "react-native";
import {styles} from "../stylesheets/registerFormStyles";
import Spinner from "react-native-loading-spinner-overlay";
import { StackActions, NavigationActions } from 'react-navigation';

import IpAddress from '../Components/serverip';

export default class RegisterPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password : "",
            confirmPassword : "",
            showPassword : true,
            spinner:false
        }
    }

    validatePassword = async() => {

        if( (this.state.password.length) === 0 ) {
            alert("Please Enter the Username");
        }
        else{
        let reg =new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
        if( reg.test(this.state.password) === false){
            alert("Invalid Format. Minimum 8 to 15 characters LongMust contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        }
        else{
        if(this.state.password !== this.state.confirmPassword){
            alert("Password doesnt match")
        }
        else{
            //alert(user.username)
            this.setState({spinner :true})
            fetch(IpAddress+'/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email":this.props.navigation.state.params.EMAIL,
                    "username":this.props.navigation.state.params.USERNAME,
                    "password":this.state.password
                })
            })
                .then((response) => (response.json()))
                .then((responsejson) => {
                    //alert(JSON.stringify(responsejson));
                    this.setState({spinner :false});
                    if( (responsejson.status) === "failure"){
                        alert("Registration Failed. Please Try after some time!");
                    }
                    else{
                        alert("Verification Mail has been sent to your mail Id");
                         this.props.navigation.dispatch(StackActions.reset({
                             index: 0,
                             key: null,
                             actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
                         }));
                    }

                })
                .catch((error)=> {
                        this.setState({spinner: false});
                        alert(error);
                    }
                )
        }
    }}
    };

    toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };


    static navigationOptions = {  
        title: 'Sign Up',  
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
                <View style={{width:'90%', marginTop:50}}>
                <Spinner
                    visible={this.state.spinner}
                    //textContent={'Loading...'}
                    //textStyle={styles.spinnerTextStyle}
                />
                <Text style={styles.header}> Register Your Password </Text>
                <TextInput style={styles.inputBox}
                           onChangeText={(password) => this.setState({password})}
                           placeholder="Password"
                           secureTextEntry={this.state.showPassword}
                           placeholderTextColor = "#000"
                           maxLength = {15}
                           onSubmitEditing={()=> this.confirmPassword.focus()}/>
                <TextInput style={styles.inputBox}
                           onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Confirm Password"
                           secureTextEntry={this.state.showPassword}
                           placeholderTextColor = "#000"
                           maxLength = {15}
                           ref={(input) => this.confirmPassword = input}/>
                <View style={{flexDirection:'row', margin:10}}>
                <Switch
                    onValueChange={this.toggleSwitch}
                    value={!this.state.showPassword}
                />
                <Text style={{fontWeight:'bold'}}>Show Password</Text>
                </View>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.validatePassword}> Submit </Text>
                </TouchableHighlight>
                </View>
            </View>
        )
    }
}