import React, { Component } from 'react';
import {Text, TextInput, TouchableHighlight, View} from "react-native";
import {styles} from "../stylesheets/registerFormStyles";
import Spinner from "react-native-loading-spinner-overlay";
import IpAddress from '../Components/serverip';


export default class RegisterUsername extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            spinner:false
        }
    }

    validateUsername = async() => {

        if( (this.state.username.length) === 0 ) {
            alert("Please Enter the Username");
        }
        else {
            let LenCheckReg = new RegExp(/^.{3,25}$/);
            let SplCharCheckReg = new RegExp(/^[-_@#0-9a-zA-Z]*$/);
            
            if ((LenCheckReg.test(this.state.username)) && (SplCharCheckReg.test(this.state.username)) === false) {
                alert("Invalid Username... \n Valid Username Format : \nminimum 3 to 25 characters long; \nnumbers,alphabets and '@' symbol are allowed ");
            }
            else {
                this.setState({spinner: true});

                fetch(IpAddress+'/user/verify/uname', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "uname": this.state.username,
                    })
                })
                .then((response) => (response.json()))
                .then((responsejson) => {
                        this.setState({spinner: false});

                        if ((responsejson.status) === "failure") {
                            alert("Username already Exist");
                        }
                        else {
                            this.props.navigation.navigate('RegisterPassword', {
                                USERNAME: this.state.username,
                                EMAIL: this.props.navigation.state.params.EMAIL
                            });
                        }

                    })
                .catch((error) => {
                            this.setState({spinner: false});
                            alert(error);
                        }
                    )
                }
            }
        };
// Header Title, font color and size
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
                <Text style={styles.header}> Enter Your User Name </Text>
                <Spinner
                    visible={this.state.spinner}
                />
                <TextInput style={styles.inputBox}
                           onChangeText={(username) => this.setState({username})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           textContentType={"emailAddress"}
                           placeholder="Username"
                           placeholderTextColor = "#000"
                           selectionColor="#fff"
                           keyboardType="email-address"
                           maxLength = {256}/>

                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.validateUsername}> Next </Text>
                </TouchableHighlight>
                </View>

            </View>
        )
    }
}